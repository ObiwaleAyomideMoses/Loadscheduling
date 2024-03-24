import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { colors } from '../constants/colors';
import { useAppFonts } from '../hooks/useAppFont';
import { size } from '../config/size';
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import SplashIcon from '../../assets/svg/SplashIcon';
const Splashscreen = () => {
  const { navigate, dispatch } = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      dispatch(StackActions.replace('HomePage'));
    }, 400);
  }, []);
  const isFontsLoaded = useAppFonts();
  if (!isFontsLoaded) return null;
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      />
      <SplashIcon
        width={size.getWidthSize(137.7)}
        height={size.getHeightSize(110.6)}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: size.getHeightSize(20),
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Visby-Regular',
            fontSize: size.fontSize(14),
            color: colors.black,
            paddingHorizontal: size.getWidthSize(16),
          }}
        >
          Developemnt of an Automatic Load Scheduling and Energy Monitoring
          System with IOT for Office Application
        </Text>
      </View>
    </View>
  );
};

export default Splashscreen;

const styles = StyleSheet.create({});
