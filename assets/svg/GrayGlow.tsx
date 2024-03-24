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

function GrayGLow(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 363 363"
      fill="none"
      {...props}
    >
      <G filter="url(#filter0_d_106_994)">
        <Circle cx={181.5} cy={183.5} r={127.5} fill="#E0E2E2" />
      </G>
      <Circle cx={181.5} cy={183.5} r={120.5} fill="#D1D2D2" />
      <Circle cx={181} cy={183} r={112} fill="#A9A9A9" />
      <Circle cx={181} cy={183} r={105} fill="url(#paint0_linear_106_994)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_106_994"
          x1={181}
          y1={78}
          x2={181}
          y2={288}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.215} stopColor="#565A59" />
          <Stop offset={1} stopColor="#171717" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default GrayGLow;
