import { ActivityIndicator } from 'react-native'
import { Container } from './styles'

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color='#D2F85D' size='large'/>
    </Container>
  );
}