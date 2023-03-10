import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const [error, setError] = useState(null);

  const navigation = useNavigation(); 

  const handleLogin = () => {
    if (username !== 'foodapp' || password !== '123456') {
      setError('Invalid username or password');
      return;
    }
    else {
      navigation.navigate("Generator");
    }
    // You can add your login logic here
    // For this example, we're just going to show a Lottie animation
    setShowAnimation(true);
    // setTimeout(() => {
    //   setShowAnimation(false);
    // }, ); // 3 seconds
  };

  return (
    <View style={styles.container}>
      {showAnimation && (
        <LottieView
          source={require('./139205-idea.json')}
          style={{ width: 300, height: 300 }}
          autoPlay
          loop={false}
        />
      )}
      <Text style={styles.title}>Welcome to the Food App!</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginPage;
