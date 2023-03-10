import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Random from './Random';


const StackNavigation = () => {

    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
        <Stack.Screen name="Generator" component={Random} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})