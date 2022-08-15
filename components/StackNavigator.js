import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Postures from '../screens/Postures';
import StraightBack from '../screens/StraightBack';


/*const screens = {

  Postures:{

    screen:Postures
  },

  StraightBack:{

    screen:StraightBack
  }
}*/
const Stack = createStackNavigator();

const StackNavigator = () => {

  return(

 
      <Stack.Navigator initialRouteName="Postures">
        <Stack.Screen name="Postures" component={Postures} />
        <Stack.Screen name="Straight Back" component={StraightBack} />
      </Stack.Navigator>
   
  )


}

export { StackNavigator }