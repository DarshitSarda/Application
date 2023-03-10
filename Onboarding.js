import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const OnboardingScreen = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={false}>
      <View style={styles.slide}>
        <Text style={styles.title}>Welcome to MyApp</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat accumsan orci, eget sollicitudin neque semper eu.</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.title}>Discover new features</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat accumsan orci, eget sollicitudin neque semper eu.</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.title}>Get started</Text>
        <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat accumsan orci, eget sollicitudin neque semper eu.</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});

export default OnboardingScreen;
