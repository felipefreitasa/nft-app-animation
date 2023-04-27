import { Home } from './src/screens/Home'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold  } from '@expo-google-fonts/nunito-sans'
import { Loading } from './src/components/Loading'

export default function App() {

  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <Home />
  )
}

