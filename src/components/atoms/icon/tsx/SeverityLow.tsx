import * as React from 'react'
import { SVGProps } from 'react'

const SvgSeverityLow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-severity-low"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <defs>
      <clipPath id="severity_low_svg__a">
        <path
          data-name="\u9577\u65B9\u5F62 342"
          fill="#f8e64e"
          d="M0 0h39.613v38.455H0z"
        />
      </clipPath>
    </defs>
    <path data-name="area box" fill="none" d="M0 0h40v40H0z" />
    <g data-name="\u30B0\u30EB\u30FC\u30D7 972">
      <g
        data-name="\u30B0\u30EB\u30FC\u30D7 971"
        transform="translate(0 .966)"
        clipPath="url(#severity_low_svg__a)"
        fill="#f8e64e"
      >
        <path
          data-name="\u30D1\u30B9 86"
          d="M19.807 10.681a9.525 9.525 0 0 0-9.469 9.577v9.575a1.9 1.9 0 0 0 1.888 1.91h15.163a1.9 1.9 0 0 0 1.888-1.91v-9.575a9.525 9.525 0 0 0-9.469-9.58"
        />
        <path
          data-name="\u30D1\u30B9 87"
          d="M30.134 33.944H9.48a2.256 2.256 0 0 0 0 4.511h20.654a2.256 2.256 0 0 0 0-4.511"
        />
      </g>
    </g>
  </svg>
)

export default SvgSeverityLow
