import React, { useEffect, useState } from 'react';
import { View, Text, Button} from 'react-native';
import Splash from './Splash';
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();
const onHomePressed = () =>{
    navigation.navigate("Login");
}

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
      <Button
    title="Go to login page"
    onPress={onHomePressed}
      
      />
    </View>
  );
};

export default SplashScreen;
