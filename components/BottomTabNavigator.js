import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StackNavigator } from './StackNavigator';

import CameraScreen from '../screens/CameraScreen';
import Postures from '../screens/Postures';
import Exercises from '../screens/Exercises';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () =>{

  return(
    
    <Tab.Navigator screenOptions={{headerShown:false}}>
    
    <Tab.Screen name="Click Photo" component={CameraScreen} />
    <Tab.Screen name="Postures" component={Postures} />
    <Tab.Screen name = "Exercises" component={Exercises} />
    
    </Tab.Navigator>
    
  )
}

export default BottomTabNavigator;
