## install

```
$ npm install echarts-react-native react-native-webview
$ yarn add echarts-react-native react-native-webview
```

## Usage

The Usage is complete consistent with Echarts

component props:

- _option_ (object): The option for echarts: [Documentation](https://echarts.apache.org/)。

```js
import { Dimensions } from 'react-native'
import Echarts from 'echarts-react-native'

const { width } = Dimensions.get('window')

export default function Line() {
  const option = {
    color: [
      {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: '#74ebd5',
          },
          {
            offset: 0.5,
            color: '#38C0FF',
          },
          {
            offset: 1,
            color: '#9face6',
          },
        ],
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLabel: {
        color: '#898989',
        textStyle: {
          fontWeight: 'bold',
        },
      },
      axisLine: {
        lineStyle: {
          color: 'transparent',
        },
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 1500,
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#2C2C2C',
        },
        show: true,
      },
    },
    grid: {
      left: '0%',
      right: '0%',
    },
    series: [
      {
        data: [320, 932, 700, 934, 1290, 830, 460],
        type: 'line',
        smooth: true,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#74ebd5',
                },
                {
                  offset: 0.5,
                  color: 'rgba(159,172,230,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(0,0,0,0)',
                },
              ],
            },
            opacity: 0.3,
          },
        },
      },
    ],
  }

  return <Echarts option={option} height={300} width={width} />
}
```

```
npm install
npm start
expo start
```

## License

echarts-react-native is released under the MIT license.
