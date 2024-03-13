import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { size } from '../config/size';

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
      }}
    >
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',
          marginTop: size.getHeightSize(40),
        }}
      >
        Turn system on and off
      </Text>
      <Text
        style={{
          textAlign: 'center',
        }}
      >
        Welcome! Turn syystem on and off
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
