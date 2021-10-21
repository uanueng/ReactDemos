import styles from './index.less';
import * as echarts from 'echarts';
import React from 'react';

class IndexPage extends React.Component {

  componentDidMount() {
    this.drawMap()
  }

  drawMap = () => {
    // 初始化
    let mapChart = echarts.init(document.getElementById('map') as HTMLElement);
    // 全球数据
    echarts.registerMap("global", require("@/assets/Countries_GEOJSON/countries.geo.json"));
    // 拼接数据
    let option = {
      series: [
        {
          name: 'map',
          type: 'map',
          map: 'global'
        }
      ]
    }
    // 绘制
    mapChart.setOption(option);
  }

  render() {
    return (
      <div>
        <h1 className={styles.title} id={'map'}>Page index</h1>
      </div>
    );
  }
}
export default IndexPage;
