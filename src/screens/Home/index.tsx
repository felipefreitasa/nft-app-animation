import { View } from 'react-native'
import React, { useEffect } from 'react'
import { Feather } from '@expo/vector-icons'

import boredApePng from '../../assets/bored-ape-nfts.png'

import { 
  withDelay, 
  withTiming,
  interpolate, 
  useSharedValue, 
  useAnimatedStyle, 
} from 'react-native-reanimated'

import { 
  Title, 
  Button, 
  Content, 
  Subtitle, 
  Container, 
  NftsImage, 
  ButtonLabel, 
  TitleHighlight
} from './styles'

export function Home() {
  
  const image = useSharedValue(0)
  const title = useSharedValue(0)
  const button = useSharedValue(0)
  const subtitle = useSharedValue(0)
  const titleHighlight = useSharedValue(0)

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return { 
      opacity: image.value,
      transform: [{ translateX: interpolate(image.value, [0, 1], [-8, 0]) }]
    }
  })

  const titleAnimatedStyle = useAnimatedStyle(() => {
    return { 
      opacity: title.value, 
      transform: [{ translateX: interpolate(title.value, [0, 1], [-8, 0]) }]
    } 
  })

  const titleHighlightAnimatedStyle = useAnimatedStyle(() => {
    return { 
      opacity: titleHighlight.value,
      transform: [{ translateX: interpolate(titleHighlight.value, [0, 1],[-8, 0]) }]
    }
  })

  const subtitleAnimatedStyle = useAnimatedStyle(() => {
    return { 
      opacity: subtitle.value,
      transform: [{ translateX: interpolate(subtitle.value, [0, 1], [-8, 0]) }]
    }
  })

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: button.value,
      transform: [{ translateX: interpolate(button.value, [0, 1], [-8, 0]) }]
    }
  })

  useEffect(() => {
    image.value = withTiming(1, { duration: 950 })
    title.value = withDelay(500, withTiming(1, { duration: 950 }))
    titleHighlight.value = withDelay(1000, withTiming(1, { duration: 950 }))
    subtitle.value = withDelay(1500, withTiming(1, { duration: 950 }))
    button.value = withDelay(2000, withTiming(1, { duration: 950 }))
  }, [])
  
  return (
    <Container>
      <NftsImage source={boredApePng} style={imageAnimatedStyle} />

      <Content>
        <View>
          <Title style={titleAnimatedStyle}>
            Explore, Collect & Sell
          </Title>

          <TitleHighlight style={titleHighlightAnimatedStyle}>
            NFTs
          </TitleHighlight>

          <Subtitle style={subtitleAnimatedStyle}>
            More than 100+ NFT available for Collect, & Sell, get your NFT from now.
          </Subtitle>
        </View>

        <Button style={buttonAnimatedStyle}>
          <ButtonLabel>
            Get Started
          </ButtonLabel>

          <Feather name="arrow-right" size={22} color="#0B1423" />
       </Button>
      </Content>
    </Container>
  )
}