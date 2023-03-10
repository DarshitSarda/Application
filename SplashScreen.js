import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Splash from './Splash';

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change the duration of the splash screen as per your requirement
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <View>
      <Text>Welcome to my app!</Text>
    </View>
  );
};

export default SplashScreen;
