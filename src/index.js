import { View, StyleSheet } from 'react-native'
import Echarts from './components/Echarts'

export default function Index(props) {
  return (
    <View style={[styles.container, { width: props.width }]}>
      <Echarts {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})
