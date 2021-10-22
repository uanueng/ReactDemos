package com.uan;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.io.FileUtils;
import org.aspectj.util.FileUtil;

import java.io.*;

class MapList{
  public static void main(String[] args) throws IOException {

    File root = new File("D:\\Projects\\JS\\ReactDemos\\LittleOne\\src\\assets\\Countries_GEOJSON\\countries");
    File data = new File("D:\\Projects\\JS\\ReactDemos\\LittleOne\\src\\assets\\Countries_GEOJSON\\mapping.json");
    if (root.isDirectory()){
      File[] files = root.listFiles();
      String mapping = FileUtils.readFileToString(data, "UTF-8");
      JSONObject mappingJson = JSON.parseObject(mapping);
      JSONArray mappingArray = new JSONArray();
      for (File file:files) {
        if (!file.isDirectory()||file.getName().contains(".json")){
          String content = null;
          try {
            content = FileUtils.readFileToString(file, "UTF-8");
          } catch (IOException e) {
            e.printStackTrace();
          }
          JSONObject mappingItem = new JSONObject();
          JSONObject json = JSON.parseObject(content);
          JSONObject features = JSON.parseObject(json.getJSONArray("features").get(0).toString());
          String id = features.getString("id");
          String name = features.getJSONObject("properties").getString("name");
          mappingItem.put("name", name);
          mappingItem.put("id", id);
          System.out.println(mappingItem.toString());
          mappingArray.add(mappingItem);
        }
      }
      try{
        mappingJson.put("mapping", mappingArray);
        OutputStreamWriter osw = new OutputStreamWriter(new FileOutputStream(data));
        osw.write(mappingJson.toString());
        osw.flush();
        osw.flush();
      }catch (Exception e){
        e.printStackTrace();
      }
    }
  }
}
