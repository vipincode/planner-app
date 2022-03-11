import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const HomeScreen = ({navigation}: NativeStackHeaderProps) => {

  useEffect(() => {
    console.log('Rendering Home Screen');
  }, []) 
  
  return (
    <View>
      <Text>I am Home Screen</Text>
      <Button title="Go to Planner" onPress={() => navigation.navigate('Planner')} />
    </View>
  );
};

export default HomeScreen;