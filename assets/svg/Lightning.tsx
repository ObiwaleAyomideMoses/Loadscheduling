import * as React from "react"
import Svg, { Circle, Path, SvgProps } from "react-native-svg"

function Lightning(props:SvgProps) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 33 33"
      fill="none"
 
      {...props}
    >
      <Circle cx={16.5} cy={16.5} r={16.5} fill="#B4B3FE" />
      <Path
        d="M15.85 6a.637.637 0 00-.335.095.66.66 0 00-.239.258l-5.2 10a.68.68 0 00.254.895.637.637 0 00.32.086h3.143l-1.185 7.899a.68.68 0 00.072.42c.068.128.175.23.305.289a.635.635 0 00.767-.184l9.1-11.335a.675.675 0 00-.154-.986.638.638 0 00-.347-.104h-4.106l3.375-6.347a.68.68 0 00-.248-.898A.637.637 0 0021.05 6h-5.2z"
        fill="#060ED6"
      />
    </Svg>
  )
}

export default Lightning
