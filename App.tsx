import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Navigation from './navigation/index';

export default function App() {
  return (
    <>
      <Navigation />
    {/* <Text>Hi Ther</Text> */}
      <StatusBar style="auto" />
    </>
  );
}

