/* eslint-disable prettier/prettier */
import { useNetInfo, default as NetInfo } from '@react-native-community/netinfo'
import React from 'react'

export const NetworkInformationContext = React.createContext({ isConnected: true })

const NetworkInformation: React.FC = ({ children }) => {
  const netInfo = useNetInfo()

  const [isConnected, setIsConnected] = React.useState<boolean>(!!netInfo.isConnected)

  React.useEffect(() => {
    return NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected)
    })
  })

  return <NetworkInformationContext.Provider value={{ isConnected }}>{children}</NetworkInformationContext.Provider>
}

export default NetworkInformation