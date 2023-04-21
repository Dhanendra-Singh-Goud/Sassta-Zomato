import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './src/screens/LoginSigninScreen/WelcomeScreen';
import LoginScreen from './src/screens/LoginSigninScreen/LoginScreen';
import RootNavigation from './src/RootNavigation';

export default function App() {
  return   (
    <RootNavigation/>
  )
   
  ;
}

const styles = StyleSheet.create({

});
