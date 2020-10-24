//Author: Mohit Bhole

import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './mainStack.js';
import LoginPage from '../screens/login';
const Stack = createStackNavigator();

export default function  MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginStack" component={LoginPage} options={{headerShown:false}}/>
      <Stack.Screen name="MainStack" component={MainStack} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}