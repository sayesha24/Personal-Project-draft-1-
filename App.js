import * as React from 'react';
//import BottomTabNavigator from "./components/BottomTabNavigator"
import {TouchableOpacity, View, SafeAreaView, Text, TextInput, StyleSheet} from 'react-native';
import CameraScreen from './screens/CameraScreen'
import Postures from './screens/Postures'
import StraightBack from './screens/StraightBack';
import CameraScreen2 from './screens/CameraScreen2'

import {Header} from 'react-native-elements';
import BottomTabNavigator from './components/BottomTabNavigator';
import { StackNavigator } from './components/StackNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

/*const Tab = createBottomTabNavigator();

function BottomTab(){

  return(

    <Tab.Navigator>
      <Tab.Screen name = "correct Postures" component={CameraScreen}/>
      <Tab.Screen name = "Postures" component={Postures}/>
    </Tab.Navigator>
  )
}*/

const Stack = createStackNavigator();

export default class App extends React.Component {
  
  render(){
  return (

   <NavigationContainer>
   <BottomTabNavigator/>
   </NavigationContainer>   
  )
  }
}


