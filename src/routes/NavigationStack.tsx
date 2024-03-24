import { View, Text, Animated, Easing } from 'react-native';
import React from 'react';
import BottomTabNavigation from './BottomTabNavigation';
import Splashscreen from '../screen/Splashscreen';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
const NavigationStack = () => {
  const Stack = createStackNavigator();
  const config = {
    animation: Animated.timing,
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };
  const closeconfig = {
    animation: 'timing',
    config: {
      duration: 200,
      easing: Easing.linear,
    },
  };
  const screens = [
    {
      name: 'Splashscreen',
      component: Splashscreen,
    },
    {
      name: 'HomePage',
      component: BottomTabNavigation,
    },
  ];
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        transitionSpec: {
          open: config as any,
          close: closeconfig as any,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      {screens.map((screen, index) => (
        <Stack.Screen
          key={index}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default NavigationStack;
