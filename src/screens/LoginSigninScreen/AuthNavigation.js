import React from 'react'
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen 
    options={{
        headerShown:false
    }}
    name='WelcomeScreen' component={WelcomeScreen} />
    <Stack.Screen name='Login' component={LoginScreen} />
    <Stack.Screen name='Signup' component={SignupScreen} />
    <Stack.Screen name='Home' component={HomeScreen} />
  </Stack.Navigator>
  )
}

export default AuthNavigation
