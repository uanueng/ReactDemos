import styles from './index.less';
import * as echarts from 'echarts';
import React from 'react';
import { ECharts } from 'echarts';


class IndexPage extends React.Component {

  timeFn: NodeJS.Timeout|null = null;
  fs = require('fs');
  path = require('path');
  mapChart:ECharts|null = null;

  componentDidMount() {
    const t = this;
    // const root = '@/assets/Countries_GEOJSON/countries/';
    let globalMap = require('@/assets/Countries_GEOJSON/countries.geo.json');
    let mapList = require('@/assets/Countries_GEOJSON/mapping.json');
    this.drawMap('global', globalMap);

  }

  drawMap = (mapName: string, mapData:any) => {
    // 初始化
    this.mapChart = echarts.init(document.getElementById('map') as HTMLElement);
    // 注册
    console.log(mapName, mapData);
    echarts.registerMap(mapName, mapData);
    // 拼接数据
    let option = {
      series: [
        {
          name: 'map',
          type: 'map',        // 设置图表类型为地图
          map: mapName,
          selectedMode: false, // 关闭单独选中
          roam: true,          // 开启鼠标事件
          label: {            // 文本标签样式
            // show: true,
            color: '#000a3c',
          },
          itemStyle: {        // 地图样式
            areaStyle: {      // 区域样式
              type: 'radial',
              x: 0.5,
              y: 0.5,
              r: 3,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(2,54,11,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(149,96,11,1)',
                },
              ],
              // globalCoord: false,
            },
            borderWidth: 1,
            borderColor: 'rgb(205,143,62)',
            shadowColor: 'rgb(8,70,7)',
            shadowOffsetX: 0,
            shadowOffsetY: 5,
            shadowBlur: 10,
          },
          emphasis: {
            label: {
              color: '#f23737',
            },
            itemStyle: {
              areaColor: '#a5d4fe',
            },
          },
        },
      ],
    };
    // 绘制
    this.mapChart.setOption(option);
    console.log(this.mapChart);
  };


  render() {
    return (
      <div>
        <h1 className={styles.title} id={'map'}>Page index</h1>
      </div>
    );
  }
}

export default IndexPage;
