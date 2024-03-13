import { StyleSheet, Text, View } from 'react-native';
import { ReactNode } from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import Details from '../screen/Details';
import Home from '../screen/Home';
import Report from '../screen/Report';
import Smart from '../screen/Smart';
import { size } from '../config/size';
import { colors } from '../constants/colors';
// Define the BottomTabNavigationProp type
const Tab = createBottomTabNavigator();

type RootStackParamList = {
  Home: undefined;
  Smart: undefined;
  Report: undefined;
  Details: undefined;
};

// Define the BottomTabNavigationRouteProp type
type BottomTabNavigationRouteProp = RouteProp<
  RootStackParamList,
  keyof RootStackParamList
>;
const BottomTabNavigation = () => {
  const home = 'Home';
  const smart = 'Smart';
  const report = 'Report';
  const details = 'Details';
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
   

        overflow: 'hidden',
      }}
    >
      <Tab.Navigator
        backBehavior="none"
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarStyle: {
            //   borderWidth: 0,
            height: size.getHeightSize(64),
            backgroundColor: colors.white,
            //   display: 'flex',
            //   borderTopWidth: 0,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
          tabBarLabel: ({ focused, position }) => {
            let label;

            switch (route.name) {
              case 'Home':
                label = home;
                break;
              case 'Smart':
                label = smart;
                break;
              case 'Report':
                label = report;
                break;
              case 'Details':
                label = details;
                break;
            }

            return (
              <Text style={{ color: focused ? 'blue' : 'black' }}>{label}</Text>
            );
          },

          tabBarIcon: ({ focused }) => {
            let image: ReactNode;
            let routeName = route.name;
            //   if (routeName === home) {
            //     image =
            //       focused === true ? (
            //         <HomeFocusIcon size={size.getHeightSize(24)} />
            //       ) : (
            //         <HomeIcon size={size.getHeightSize(24)} />
            //       );
            //   }

            //   if (routeName === loan) {
            //     image =
            //       focused === true ? (
            //         <LoanFocusIcon size={size.getHeightSize(24)} />
            //       ) : (
            //         <LoanIcon size={size.getHeightSize(24)} />
            //       );
            //   }
            //   if (routeName === card) {
            //     image =
            //       focused === true ? (
            //         <CardFocusIcon
            //           width={size.getWidthSize(24)}
            //           height={size.getHeightSize(18.46)}
            //         />
            //       ) : (
            //         <CardsIcon
            //           width={size.getWidthSize(24)}
            //           height={size.getHeightSize(18.46)}
            //         />
            //       );
            //   }
            //   if (routeName === account) {
            //     image =
            //       focused === true ? (
            //         <AccountIcon size={size.getHeightSize(24)} />
            //       ) : (
            //         <AccountIcon size={size.getHeightSize(24)} />
            //       );
            //   }
            return image;
          },
        })}
      >
        <Tab.Screen
          name={details}
          component={Details}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={home}
          component={Home}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name={report}
          component={Report}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={smart}
          component={Smart}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
