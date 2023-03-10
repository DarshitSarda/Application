import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

const LottieScreen = () => {
  return (
    <View >
      <LottieView
      style={styles.lotte}
        source={require('./139205-idea.json')}
        autoPlay
        loop
      />
      <Text style={styles.textinput}>LightBulb</Text>
    </View>
  );
};

const styles=StyleSheet.create({
textinput:{
    fontSize:50,
    textAlign:'center',
    padding:50,
    paddingTop: 500
},
lotte:{
    height:200,
    width:200
}

})

export default LottieScreen;
