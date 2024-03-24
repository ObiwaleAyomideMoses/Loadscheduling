import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function HomeFocused(props: SvgProps) {
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
        d="M16.076 2h3.386A2.549 2.549 0 0122 4.56v3.415a2.549 2.549 0 01-2.538 2.56h-3.386a2.549 2.549 0 01-2.539-2.56V4.56A2.549 2.549 0 0116.076 2z"
        fill="#2754C8"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.539 2h3.385a2.549 2.549 0 012.539 2.56v3.415a2.549 2.549 0 01-2.539 2.56H4.54A2.549 2.549 0 012 7.974V4.56A2.549 2.549 0 014.539 2zm0 11.466h3.385a2.549 2.549 0 012.539 2.56v3.414A2.55 2.55 0 017.924 22H4.54A2.55 2.55 0 012 19.44v-3.415a2.549 2.549 0 012.539-2.56zm14.923 0h-3.386a2.549 2.549 0 00-2.539 2.56v3.414A2.55 2.55 0 0016.076 22h3.386A2.55 2.55 0 0022 19.44v-3.415a2.549 2.549 0 00-2.538-2.56z"
        fill="#2754C8"
      />
    </Svg>
  );
}

export default HomeFocused;
