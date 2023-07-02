import { View } from 'react-native'
import WebView from 'react-native-webview'
import renderEcharts from './renderEcharts'
import HtmlWeb from '../../utils/HtmlWeb'

export default function Index(props) {
  return (
    <View style={{ flex: 1, height: props.height || 400 }}>
      <WebView
        key={JSON.stringify(props.option)}
        scrollEnabled={false}
        injectedJavaScript={renderEcharts(props)}
        overScrollMode='never'
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={props.nestedScrollEnabled}
        style={{
          height: props.height || 400,
          backgroundColor: props.backgroundColor || 'transparent'
        }}
        source={{ html: HtmlWeb() }}
        onMessage={(event) => props.onPress ? props.onPress(JSON.parse(event.nativeEvent.data)) : null}
      />
    </View>
  )
}
