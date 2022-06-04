import React, { FC } from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'

import ThemeProvider from 'providers/Theme'
import ApolloProvider from 'providers/Apollo'
import CacheProvider from 'providers/Cache'
import Navigation from 'screens'
import StatusBar from 'components/StatusBar'
import NetworkInformation from 'providers/NetworkInformation'

const App: FC = () => (
  <ThemeProvider>
    <ApolloProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NetworkInformation>
            <CacheProvider>
              <Navigation />
            </CacheProvider>
          </NetworkInformation>
        </SafeAreaView>
        <StatusBar />
      </SafeAreaProvider>
    </ApolloProvider>
  </ThemeProvider>
)

export default App
