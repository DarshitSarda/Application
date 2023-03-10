/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Darshit from './Darshit';
import Location from './Maps';
import Maps from './Maps'
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import LottieScreen from './LottieScreen';
import SplashScreen from './SplashScreen';
import RecipeCard from './RecipeCard';
import {PropsWithChildren} from 'react';
import Random from './Random';
import StackNavigation from './StackNavigation';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import OnboardingScreen from './Onboarding';


const App = () => {
  return (
    // <RecipeCard
    //     title="Recipe Title"
    //     description="This is a description of the recipe."
    //     image="https://imgs.xkcd.com/comics/online_communities.png"
    //   />
    <OnboardingScreen/>
  );
  }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  aradhya:{
    fontSize:50,
    textAlign: 'center',
    marginTop: 100
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
