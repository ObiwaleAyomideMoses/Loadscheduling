import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function DetailsIcon(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.4}
        d="M11 19.5h10M11 12.5h10M11 5.5h10"
        stroke="#454448"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 5.5l1 1 3-3M3 12.5l1 1 3-3M3 19.5l1 1 3-3"
        stroke="#454448"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DetailsIcon;
