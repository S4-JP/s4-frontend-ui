import * as React from 'react'
import { SVGProps } from 'react'

const SvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-time"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <defs>
      <clipPath id="time_svg__a">
        <path d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h40v40H0z" />
    <g clipPath="url(#time_svg__a)">
      <path d="M20 0a20 20 0 1 0 20 20A20 20 0 0 0 20 0m11.877 22.1H20a1.5 1.5 0 0 1-1.5-1.5V7.239a1.5 1.5 0 1 1 3 0V19.1h10.377a1.5 1.5 0 1 1 0 3" />
    </g>
  </svg>
)

export default SvgTime
