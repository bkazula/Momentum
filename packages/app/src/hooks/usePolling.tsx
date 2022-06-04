import { NetworkInformationContext } from 'providers/NetworkInformation'
import { useContext, useEffect } from 'react'

const usePolling = (startPolling, stopPolling, pollInterval) => {
  const { isConnected } = useContext(NetworkInformationContext)
  useEffect(() => {
    if (isConnected) {
      startPolling(pollInterval)
    } else {
      stopPolling()
    }
  }, [isConnected])
}

export default usePolling