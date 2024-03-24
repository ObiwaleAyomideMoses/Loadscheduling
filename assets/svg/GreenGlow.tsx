import * as React from 'react';
import Svg, {
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function GreenGlow(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 363 363"
      fill="none"
      {...props}
    >
      <G filter="url(#filter0_d_106_995)">
        <Circle cx={181.5} cy={183.5} r={127.5} fill="#D9FFF5" />
      </G>
      <Circle cx={181.5} cy={183.5} r={120.5} fill="#92FFE3" />
      <Circle cx={181} cy={183} r={112} fill="#39FFCC" />
      <Circle cx={181} cy={183} r={105} fill="url(#paint0_linear_106_995)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_106_995"
          x1={181}
          y1={78}
          x2={181}
          y2={288}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.215} stopColor="#06D6A0" />
          <Stop offset={1} stopColor="#037054" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default GreenGlow;
