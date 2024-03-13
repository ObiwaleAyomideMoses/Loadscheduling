import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
export default function App() {
  const [response, setRsponse] = useState('');
  const request = async () => {
    const response = await axios.get('http://192.168.4.1/16/on');
    console.log(response.data);
    setRsponse(response.data);
  };
  return (
    <View style={styles.container}>
      <Text onPress={() => request()}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text>{response.statePin16}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
