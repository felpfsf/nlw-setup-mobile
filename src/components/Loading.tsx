import { ActivityIndicator, View } from 'react-native'

export default function Loading() {
  return (
    <View
      style={{
        backgroundColor:"#09090A",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <ActivityIndicator color='#8B5CF6' />
    </View>
  )
}
