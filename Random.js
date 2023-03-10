import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Random= () => {
  const [code, setCode] = useState('');

  const generateCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\\:;"\'<>,.?/';
    let randomCode = '';
    for (let i = 0; i < 15; i++) {
      randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCode(randomCode);
  }

  return (
    <View>
      <Button title="Generate Code" onPress={generateCode} />
      <Text>{code}</Text>
    </View>
  );
}

export default Random;
