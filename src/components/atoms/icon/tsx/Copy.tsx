import * as React from 'react'
import { SVGProps } from 'react'

const SvgCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-copy"
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    {...props}
  >
    <defs>
      <clipPath id="copy_svg__a">
        <path fill="#92a2af" d="M0 0h39.022v40H0z" />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h40v40H0z" />
    <g transform="translate(.489)" clipPath="url(#copy_svg__a)" fill="#92a2af">
      <path d="M5 28.875V9.127h-.353A4.648 4.648 0 0 0 0 13.774v19.518A6.709 6.709 0 0 0 6.71 40h19.408a4.645 4.645 0 0 0 4.647-4.645v-.383H11.093a6.1 6.1 0 0 1-6.1-6.1" />
      <path d="M35.209 0H12.071a3.812 3.812 0 0 0-3.812 3.812v23.965a3.812 3.812 0 0 0 3.812 3.813h23.138a3.812 3.812 0 0 0 3.813-3.813V3.812A3.811 3.811 0 0 0 35.209 0m-3.467 18.227a1.681 1.681 0 0 1-1.68 1.679H17.216a1.678 1.678 0 0 1 0-3.356h12.846a1.679 1.679 0 0 1 1.68 1.677Zm-1.68-5.713H17.216a1.678 1.678 0 0 1 0-3.356h12.846a1.678 1.678 0 1 1 0 3.356" />
    </g>
  </svg>
)

export default SvgCopy
