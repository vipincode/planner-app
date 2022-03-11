import { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const PlannerScreen = ({navigation}: NativeStackHeaderProps) => {
  
  useEffect(() => {
    console.log('Rendering Planner Screen');
  }, []) 

  return (
    <View>
      <Text>Welcome planner</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default PlannerScreen;