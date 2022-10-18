import { StatusBar } from 'react-native';
import { Background } from './src/componentes/Background';
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from '@expo-google-fonts/inter';
import { Routes } from './src/routes';
import { Loading } from './src/componentes/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar
       barStyle="light-content"
      />
      {fontsLoaded ? <Routes/> : <Loading/>}
    </Background>
  );
}
