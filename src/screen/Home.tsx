import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../constants/colors';
import { size } from '../config/size';
import GrayGLow from '../../assets/svg/GrayGlow';
import Lightning from '../../assets/svg/Lightning';
import { useAppFonts } from '../hooks/useAppFont';
import GreenGlow from '../../assets/svg/GreenGlow';
const Home = () => {
  const [isOn, setIsOn] = useState(false);
  const isFontsLoaded = useAppFonts();
  if (!isFontsLoaded) return null;
  return (
    <View
      style={{
        backgroundColor: colors.white,
        flex: 1,
      }}
    >
      <Text style={styles.text}>Turn system ON and OFF</Text>
      <Text style={styles.subText}>Welcome, Turn system on and off</Text>
      {isOn ? (
        <GreenGlow
          onPress={() => setIsOn((previous) => !previous)}
          size={size.getHeightSize(363)}
          style={{
            alignSelf: 'center',
            marginTop: size.getHeightSize(63),
          }}
        />
      ) : (
        <GrayGLow
          onPress={() => setIsOn((previous) => !previous)}
          size={size.getHeightSize(363)}
          style={{
            alignSelf: 'center',
            marginTop: size.getHeightSize(63),
          }}
        />
      )}
      <View style={styles.view}>
        <Lightning
          color={'#06D6A0'}
          backgroundColor="#B3FEEA"
          size={size.getHeightSize(18)}
        />
        <Text style={styles.text2}>
          100%, Turn system {isOn ? 'OFF' : 'ON'}
        </Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: colors.black,
    fontFamily: 'Visby-Bold',
    fontSize: size.fontSize(20),
    textAlign: 'center',
    marginTop: size.getHeightSize(40),
  },
  subText: {
    textAlign: 'center',
    fontFamily: 'Visby-Regular',
    fontSize: size.fontSize(16),
    marginTop: size.getHeightSize(8),
    color: colors.black,
  },
  view: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: size.getWidthSize(8),
  },
  text2: {
    textAlign: 'center',
    fontFamily: 'Visby-Regular',
    fontSize: size.fontSize(16),
    color: colors.black,
  },
});
