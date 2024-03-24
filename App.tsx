import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './src/routes/BottomTabNavigation';
import Splashscreen from './src/screen/Splashscreen';
import NavigationStack from './src/routes/NavigationStack';
import {
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import axios from 'axios';
import { colors } from './src/constants/colors';
export default function App() {
  const [response, setRsponse] = useState({
    statePin16: '',
  });
  const request = async () => {
    const response = await axios.get('http://192.168.4.1/16/on');
    console.log(response.data);
    setRsponse(response.data);
  };
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
