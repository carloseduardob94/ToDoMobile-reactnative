import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })
  return (
    <>
      <StatusBar style="light" />
      {fontsLoaded ? <Home /> : <ActivityIndicator size={50} />}
    </>
  );
}
