import { TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity)

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #0B1423;
`

export const NftsImage = styled(Animated.Image)`
  width: 100%;
  height: 50%;
`

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
`

export const Title = styled(Animated.Text)`
  font-size: 54px;
  color: #FBFCFD;
  font-family: 'NunitoSans_700Bold';
  line-height: 60px;
`

export const TitleHighlight = styled(Title)`
  color: #D2F85D;
`

export const Subtitle = styled(Animated.Text)`
  font-size: 20px;
  color: #718390;
  line-height: 26px;
  font-family: 'NunitoSans_400Regular';
`

export const Button = styled(AnimatedPressable)`
  background-color: #D2F85D;
  border-radius: 4px;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const ButtonLabel = styled.Text`
  font-size: 18px;
  color: #0B1423;
  font-family: 'NunitoSans_700Bold';
  margin-right: 8px;
`