import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constants/colors';
import { size } from '../config/size';
import GrayGLow from '../../assets/svg/GrayGlow';
import Lightning from '../../assets/svg/Lightning';
import ToggleSwitch from '../components/ToggleSwitch';
import { useAppFonts } from '../hooks/useAppFont';
const Smart = () => {
  const switches = {
    port1: false,
    port2: false,
    port3: false,
    port4: false,
  };
  const [mode, setMode] = useState(switches);
  const isFontsLoaded = useAppFonts();
  if (!isFontsLoaded) return null;
  const toggleModes = (
    port: 'port1' | 'port2' | 'port3' | 'port4',
    value: boolean
  ) => {
    const updatedSwitch = { ...mode, [port]: value };
    setMode(updatedSwitch);
  };
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: size.getWidthSize(35),
      }}
    >
      <Text style={styles.text}>Load Scheduling</Text>
      <View
        style={{
          marginTop: size.getHeightSize(30),
          gap: size.getHeightSize(24),
        }}
      >
        <View
          style={{
            ...styles.row,
            backgroundColor: mode.port1 ? '#EBFFFA' : '#FFFFFF',
          }}
        >
          <View style={styles.view1}>
            <Text style={styles.subText}>Mode 1: 50%</Text>
            <Text style={{ ...styles.text1, textAlign: 'left' }}>
              All System On
            </Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text1}>
              {mode.port1 ? 'Active' : 'Inactive'}
            </Text>
            <ToggleSwitch
              callBack={() => {
                toggleModes('port1', !mode.port1);
              }}
              isEnabled={mode.port1 === true}
            />
          </View>
        </View>
        <View
          style={{
            ...styles.row,
            backgroundColor: mode.port2 ? '#EBFFFA' : '#FFFFFF',
          }}
        >
          <View style={styles.view1}>
            <Text style={styles.subText}>Mode 2: 80%</Text>
            <Text style={{ ...styles.text1, textAlign: 'left' }}>
              Fridge, Laptop, Fan
            </Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text1}>
              {mode.port2 ? 'Active' : 'Inactive'}
            </Text>
            <ToggleSwitch
              callBack={() => {
                toggleModes('port2', !mode.port2);
              }}
              isEnabled={mode.port2 === true}
            />
          </View>
        </View>
        <View
          style={{
            ...styles.row,
            backgroundColor: mode.port3 ? '#EBFFFA' : '#FFFFFF',
          }}
        >
          <View style={styles.view1}>
            <Text style={styles.subText}>Mode 3: 60%</Text>
            <Text style={{ ...styles.text1, textAlign: 'left' }}>
              Laptop, Fan, Bulb
            </Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text1}>
              {mode.port3 ? 'Active' : 'Inactive'}
            </Text>
            <ToggleSwitch
              callBack={() => {
                toggleModes('port3', !mode.port3);
              }}
              isEnabled={mode.port3 === true}
            />
          </View>
        </View>
        <View
          style={{
            ...styles.row,
            backgroundColor: mode.port4 ? '#EBFFFA' : '#FFFFFF',
          }}
        >
          <View style={styles.view1}>
            <Text style={styles.subText}>Mode 4: 10%</Text>
            <Text style={{ ...styles.text1, textAlign: 'left' }}>Bulb</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text1}>
              {mode.port4 ? 'Active' : 'Inactive'}
            </Text>
            <ToggleSwitch
              callBack={() => {
                toggleModes('port4', !mode.port4);
              }}
              isEnabled={mode.port4 === true}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Smart;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: 'Visby-Bold',
    fontSize: size.fontSize(20),
    textAlign: 'left',
    marginTop: size.getHeightSize(40),
  },
  subText: {
    color: colors.black,
    fontFamily: 'Visby-Bold',
    fontSize: size.fontSize(16),
    textAlign: 'left',
    lineHeight: size.getHeightSize(20),
  },
  text1: {
    color: colors.black,
    fontFamily: 'Visby-Regular',
    fontSize: size.fontSize(14),
    textAlign: 'right',
    lineHeight: size.getHeightSize(18),
  },
  view1: {
    flex: 1,
    gap: size.getHeightSize(4),
  },
  view2: {
    gap: size.getHeightSize(4),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: size.getHeightSize(15),
    paddingBottom: size.getHeightSize(28),
    paddingHorizontal: size.getWidthSize(17),
    borderRadius: 2,
  },
});
