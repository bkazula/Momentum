import { Linking, Platform } from 'react-native'

const navigate = (lat: number, lng: number, title?: string): void => {
  const latLng = `${lat},${lng}`
  const iosLink = `maps:0,0?q=${title}@${latLng}`
  const url = Platform.select({
    ios: iosLink,
    android: `geo:0,0?q=${latLng}(${title})`,
    web: `https://www.google.com/maps/dir//${title ? encodeURI(title) : latLng}/@${latLng},13z`,
  })
  ;(async () => {
    if (Platform.OS === 'web') {
      if (/(android)/i.test(navigator.userAgent)) {
        Linking.openURL(`geo:0,0?q=${title ? title.replace(' ', '+') : latLng}(${title})`)
        return
      }
      if (
        ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(
          navigator.platform,
        ) ||
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
      ) {
        if (await Linking.canOpenURL(iosLink)) {
          Linking.openURL(iosLink)
          return
        }
        Linking.openURL(`http://maps.apple.com/?daddr=${latLng}&ll=${latLng}`)
        return
      }
    }

    if (url) {
      Linking.openURL(url)
    }
  })()
}

export default navigate
