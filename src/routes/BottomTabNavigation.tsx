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
import HomeBlur from '../../assets/svg/HomeBlur';
import SmartFocused from '../../assets/svg/SmartFocused';
import { colors } from '../constants/colors';
import HomeFocused from '../../assets/svg/HomeFocused';
import ScheduleIcon from '../../assets/svg/ScheduleIcon';
import DetailsIcon from '../../assets/svg/Details';
import ReportIcon from '../../assets/svg/ReportIcon';
import DetailsFocused from '../../assets/svg/DetailsFocused';
import ReportFocused from '../../assets/svg/ReportFocused';
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
              <Text style={{ color: focused ? colors.blue : colors.black }}>
                {label}
              </Text>
            );
          },

          tabBarIcon: ({ focused }) => {
            let image: ReactNode;
            let routeName = route.name;
            if (routeName === home) {
              image =
                focused === true ? (
                  <HomeFocused size={size.getHeightSize(24)} />
                ) : (
                  <HomeBlur size={size.getHeightSize(24)} />
                );
            }

            if (routeName === smart) {
              image =
                focused === true ? (
                  <SmartFocused size={size.getHeightSize(24)} />
                ) : (
                  <ScheduleIcon size={size.getHeightSize(24)} />
                );
            }
            if (routeName === report) {
              image =
                focused === true ? (
                  <ReportFocused size={size.getHeightSize(24)} />
                ) : (
                  <ReportIcon size={size.getHeightSize(24)} />
                );
            }
            if (routeName === details) {
              image =
                focused === true ? (
                  <DetailsFocused
                    width={size.getWidthSize(24)}
                    height={size.getHeightSize(18.46)}
                  />
                ) : (
                  <DetailsIcon
                    width={size.getWidthSize(24)}
                    height={size.getHeightSize(18.46)}
                  />
                );
            }
            return image;
          },
        })}
      >
        <Tab.Screen
          name={home}
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={smart}
          component={Smart}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={report}
          component={Report}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={details}
          component={Details}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
