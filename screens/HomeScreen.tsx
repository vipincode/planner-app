import { useEffect } from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({navigation}: any) => {

  useEffect(() => {
    console.log('Rendering Home Screen');
  }, []) 
  
  return (
    <View>
      <Text>I am Home Screen</Text>
      <Button title="Go to Planner" onPress={() => navigation.push('Planner')} />
    </View>
  );
};

export default HomeScreen;