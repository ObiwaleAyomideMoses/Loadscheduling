import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SwitchToggle from 'react-native-switch-toggle';
import { size } from '../config/size';
interface Props {
  callBack: () => void;
  isEnabled: boolean;
}
const ToggleSwitch = ({ callBack, isEnabled }: Props) => {
  return (
    <SwitchToggle
      switchOn={isEnabled}
      onPress={callBack}
      circleColorOff="#FC153D"
      circleColorOn="#06D6A0"
      backgroundColorOn="#B3FEEA"
      backgroundColorOff="#FFCAD3"
      containerStyle={{
        width: size.getWidthSize(44),
        height: size.getHeightSize(23.6),
        borderRadius: 25,
        padding: size.getHeightSize(3),
      
      }}
      circleStyle={{
        height: size.getHeightSize(16),
        width: size.getHeightSize(16),
        borderRadius: 20,
      }}
    />
  );
};

export default ToggleSwitch;

const styles = StyleSheet.create({});
