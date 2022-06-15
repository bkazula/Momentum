import React, { FC, useRef, useState } from 'react'
import styled from '@emotion/native'
import { useTheme } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { TouchableOpacity, View } from 'react-native'

import { Maybe, Scalars, SpeakerFragment } from '@-local/db/lib/api'
import Text from 'components/Text'
import Location from './Location'
import Speaker from './Speaker'
import { useSpringTransition } from 'hooks/useSpringTransition'

type ExtendedInfoProps = {
  description?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  speaker?: Maybe<SpeakerFragment>
  secondSpeaker?: Maybe<SpeakerFragment>
  isMainEvent?: Maybe<Scalars['Boolean']>
}

export const ExtendedInfo: FC<ExtendedInfoProps> = ({
  description,
  speaker,
  secondSpeaker,
  location,
  isMainEvent,
  children,
}) => {
  const isExpandable = useRef(!!(description || location || speaker))
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState<boolean>(isMainEvent || !isExpandable.current)
  const [height, setHeight] = useState<number>()
  const transition = useSpringTransition(isOpen, height)
  const style = useAnimatedStyle(() => ({
    height: transition.value,
  }))

  return (
    <>
      {!isMainEvent && isExpandable.current && (
        <ExpandableDetails style={style} setHeight={setHeight}>
          {description && (
            <DescriptionSection>
              <DescriptionText>{description}</DescriptionText>
            </DescriptionSection>
          )}
          {location || speaker ? (
            <SpeakerAndLocation>
              {location && <Location>{location}</Location>}
              <SpeakerContainer>
                {speaker && <Speaker {...speaker} />}
                {secondSpeaker && <Speaker {...secondSpeaker} />}
              </SpeakerContainer>
            </SpeakerAndLocation>
          ) : null}
        </ExpandableDetails>
      )}
      {isMainEvent && (
        <>
          {description && (
            <DescriptionSection>
              <DescriptionText>{description}</DescriptionText>
            </DescriptionSection>
          )}
          {location || speaker ? (
            <SpeakerAndLocation>
              {location && <Location>{location}</Location>}
              {speaker && <Speaker {...speaker} />}
            </SpeakerAndLocation>
          ) : null}
        </>
      )}
      {children}
      {!isMainEvent && isExpandable.current && (
        <TouchableExpandButton onPress={() => setIsOpen(!isOpen)}>
          <MaterialIcons
            name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color={theme.colors.text}
          />
        </TouchableExpandButton>
      )}
    </>
  )
}

type ExpandableDetailsProps = {
  style: {
    height: number
  }
  setHeight: React.Dispatch<React.SetStateAction<number | undefined>>
}

const ExpandableDetails: FC<ExpandableDetailsProps> = ({ style, setHeight, children }) => (
  <Animated.View
    style={[
      {
        overflow: 'hidden',
      },
      style,
    ]}
  >
    <View
      onLayout={(event) => {
        setHeight(event?.nativeEvent?.layout?.height)
      }}
    >
      {children}
    </View>
  </Animated.View>
)

const DescriptionSection = styled.View`
  padding: ${({ theme }) => `0 ${theme.spacing.m}px ${theme.spacing.l}px`};
`

const DescriptionText = styled(Text)`
  font-family: ${({ theme }) => theme.font.light};
`

const SpeakerAndLocation = styled.View`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
`

const SpeakerContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`

const TouchableExpandButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xxs}px`};
`

export default ExtendedInfo
