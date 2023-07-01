import toString from 'native-echarts/src/utils/toString'

export default function renderEcharts(props) {
  const height = `${props.height || 400}px`
  const width = props.width ? `${props.width}px` : 'auto'

  return `
    const main = document.getElementById('main')
    main.style.height = "${height}";
    main.style.width = "${width}";
    var Echarts = echarts.init(main);
    Echarts.setOption(${toString(props.option)});
  `
}
