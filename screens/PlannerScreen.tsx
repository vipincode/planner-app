import { useEffect } from 'react';
import {View, Text, Button} from 'react-native';

const PlannerScreen = ({navigation}:any) => {
  
  useEffect(() => {
    console.log('Rendering Planner Screen');
  }, []) 

  return (
    <View>
      <Text>Welcome planner</Text>
      <Button title="Go to Home" onPress={() => navigation.push("Home")} />
    </View>
  );
};

export default PlannerScreen;