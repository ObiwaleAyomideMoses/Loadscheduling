import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function HomeBlur(props: SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        opacity={0.4}
        d="M16.576 2h3.386A2.549 2.549 0 0122.5 4.56v3.415a2.549 2.549 0 01-2.538 2.56h-3.386a2.549 2.549 0 01-2.539-2.56V4.56A2.549 2.549 0 0116.576 2z"
        fill="#454448"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.039 2h3.385a2.549 2.549 0 012.539 2.56v3.415a2.549 2.549 0 01-2.539 2.56H5.04A2.549 2.549 0 012.5 7.974V4.56A2.549 2.549 0 015.039 2zm0 11.466h3.385a2.549 2.549 0 012.539 2.56v3.414A2.55 2.55 0 018.424 22H5.04A2.55 2.55 0 012.5 19.44v-3.415a2.549 2.549 0 012.539-2.56zm14.923 0h-3.386a2.549 2.549 0 00-2.539 2.56v3.414A2.55 2.55 0 0016.576 22h3.386a2.55 2.55 0 002.538-2.56v-3.415a2.549 2.549 0 00-2.538-2.56z"
        fill="#454448"
      />
    </Svg>
  );
}

export default HomeBlur;
