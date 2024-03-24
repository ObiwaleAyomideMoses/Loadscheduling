import * as React from 'react';
import Svg, { G, Path, SvgProps } from 'react-native-svg';

function ReportFocused(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <G
        opacity={0.6}
        stroke="#2754C8"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M22.5 6.5h-6" />
        <G opacity={0.4}>
          <Path d="M6.5 6.5h-4M10.5 10a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        </G>
        <Path d="M8.5 17.5h-6" />
        <G opacity={0.4}>
          <Path d="M22.5 17.5h-4M14.5 21a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        </G>
      </G>
    </Svg>
  );
}

export default ReportFocused;
