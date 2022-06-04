import { useGetSpeakersQuery } from '@-local/db/lib/api'
import { useTheme } from '@emotion/react'
import { FullLoader as Loader } from 'components/Loader'
import ErrorBoundary from 'containers/error/Boundary'
import usePolling from 'hooks/usePolling'
import { NetworkInformationContext } from 'providers/NetworkInformation'
import React, { FC, useContext } from 'react'
import { FlatList } from 'react-native'
import SpeakerCard from './components/SpeakerCard'


const Speakers: FC = () => {
  const { isConnected } = useContext(NetworkInformationContext)
  const { data, loading, error, startPolling, stopPolling } = useGetSpeakersQuery({
    fetchPolicy: isConnected ? 'cache-and-network' : 'cache-only',
  })

  usePolling(startPolling, stopPolling, 10000)
  const theme = useTheme()

  if (loading) return <Loader />
  if (error || !data) throw error

  return (
    <FlatList
      key={Math.random()}
      contentContainerStyle={{ padding: theme.spacing.m / 2 }}
      data={data.speaker.filter(({ priority }) => priority !== 0)}
      renderItem={({ item }) => <SpeakerCard {...item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      // extraData={selectedId}
    />
  )
}

const SpeakersScreen: FC = () => (
  <ErrorBoundary>
    <Speakers />
  </ErrorBoundary>
)

export default SpeakersScreen
