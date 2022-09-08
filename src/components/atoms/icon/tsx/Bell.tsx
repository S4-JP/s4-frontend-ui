import * as React from 'react'
import { SVGProps } from 'react'

const SvgBell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-bell"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 41"
    {...props}
  >
    <path
      d="M14.182 36.219a1.413 1.413 0 0 1 1.322-1.862h8.994a1.416 1.416 0 0 1 1.324 1.862 6.1 6.1 0 0 1-11.64 0Zm-7.125-4.871A5.625 5.625 0 0 1 1.28 26.59a5.135 5.135 0 0 1 2.733-5 4.2 4.2 0 0 0 2.144-3.709v-4.255C6.157 6.377 12.357.5 20.001.5s13.843 5.877 13.843 13.126v4.256a4.205 4.205 0 0 0 2.143 3.712 5.13 5.13 0 0 1 2.733 5 5.623 5.623 0 0 1-5.78 4.758Z"
      stroke="rgba(0,0,0,0)"
      strokeMiterlimit={10}
    />
    <path fill="none" d="M0 .5h40v40H0z" />
  </svg>
)

export default SvgBell
