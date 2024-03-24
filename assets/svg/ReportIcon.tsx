import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

function ReportIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G
        opacity={0.6}
        stroke="#454448"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M22 6.5h-6" />
        <G opacity={0.4}>
          <Path d="M6 6.5H2M10 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        </G>
        <Path d="M8 17.5H2" />
        <G opacity={0.4}>
          <Path d="M22 17.5h-4M14 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        </G>
      </G>
    </Svg>
  );
}

export default ReportIcon;
