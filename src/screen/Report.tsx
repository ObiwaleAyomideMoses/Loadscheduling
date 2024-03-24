import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../constants/colors';
import { size } from '../config/size';

import GrayGLow from '../../assets/svg/GrayGlow';
import Lightning from '../../assets/svg/Lightning';
import { useAppFonts } from '../hooks/useAppFont';
const Report = () => {
  return (
    <View
      style={{
        backgroundColor: colors.white,

        flex: 1,
        paddingHorizontal: size.getWidthSize(34),
      }}
    >
      <Text style={styles.text}>Reports</Text>
      <View style={styles.parentView}>
        <View style={styles.view2}>
          <Lightning
            color={'#06D6A0'}
            backgroundColor="#B3FEEA"
            size={size.getHeightSize(33)}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.current}>Current</Text>
            <Text style={styles.value}>
              72
              <Text
                style={{
                  fontFamily: 'Visby-Regular',
                  fontSize: size.fontSize(12),
                }}
              >
                {' '}
                Amps
              </Text>
            </Text>
            <Text style={styles.percent}>100%</Text>
          </View>
        </View>
        <View style={styles.view2}>
          <Lightning
            color={'#060ED6'}
            backgroundColor={'#B4B3FE'}
            size={size.getHeightSize(33)}
          />
          <View
            style={{
              flex: 1,
            }}
          >
            <Text style={styles.current}>Voltage</Text>
            <Text style={styles.value}>
              120
              <Text
                style={{
                  fontFamily: 'Visby-Regular',
                  fontSize: size.fontSize(12),
                }}
              >
                {' '}
                Volts
              </Text>
            </Text>
            <Text style={styles.percent}>100%</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Report;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: 'Visby-Bold',
    fontSize: size.fontSize(20),
    textAlign: 'left',
    marginTop: size.getHeightSize(40),
  },
  parentView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(16),
    marginTop: size.getHeightSize(34),
    width: '100%',
    justifyContent: 'space-between',
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: size.getWidthSize(24),
    backgroundColor: '#FAF9F6',
    paddingHorizontal: size.getWidthSize(14),
    paddingVertical: size.getHeightSize(17),
    borderRadius: 10,
    flex: 1,
  },
  current: {
    fontFamily: 'Visby-Regular',
    fontSize: size.fontSize(16),
    color: colors.black,
  },
  value: {
    fontFamily: 'Visby-Bold',
    fontSize: size.fontSize(23),
    color: colors.black,
    lineHeight: size.getHeightSize(27),
  },
  percent: {
    fontFamily: 'Visby-Bold',
    fontSize: size.fontSize(16),
    color: colors.green,
  },
});
