import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

function SplashIcon(props: SvgProps) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 138 111"
      fill="none"
      {...props}
    >
      <Circle cx={82.2993} cy={55.2993} r={55.2993} fill="#B3FEEA" />
      <Circle cx={55.2993} cy={55.2993} r={55.2993} fill="#B3FEEA" />
      <Path
        d="M64.12 20.109c-.395 0-.782.11-1.12.32a2.21 2.21 0 00-.801.864L44.77 54.809a2.281 2.281 0 00.054 2.202c.193.33.467.604.794.795.328.19.697.29 1.074.29h10.532l-3.97 26.471c-.073.484.012.978.24 1.407a2.2 2.2 0 001.024.97c.435.2.922.247 1.386.135.464-.111.88-.376 1.183-.753l30.5-37.987c.262-.327.428-.723.48-1.143.05-.42-.016-.846-.192-1.229a2.217 2.217 0 00-.803-.933 2.139 2.139 0 00-1.164-.348H72.148L83.46 23.413a2.28 2.28 0 00-.038-2.21 2.205 2.205 0 00-.795-.8 2.136 2.136 0 00-1.077-.294H64.12z"
        fill="#06D6A0"
      />
    </Svg>
  );
}

export default SplashIcon;
