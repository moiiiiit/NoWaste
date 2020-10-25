//Author: Mohit Bhole

import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './mainStack.js';
import Login from '../screens/login.js';
import Signup from '../screens/signup.js';
import Profile from '../screens/profile.js';
const Stack = createStackNavigator();

export default function  MyStack() {
  return (
    <Stack.Navigator style={{backgroundColor: "#fff"}}>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
      <Stack.Screen name="MainStack" component={MainStack} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}