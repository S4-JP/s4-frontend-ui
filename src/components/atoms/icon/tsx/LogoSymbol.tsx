import * as React from 'react'
import { SVGProps } from 'react'

const SvgLogoSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-logo-symbol"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    {...props}
  >
    <g>
      <circle cx={7.959} cy={7.959} r={7.959} fill="#004b96" />
      <path
        d="M59.878 10.871v-4.42a5.079 5.079 0 0 0-5.577-5.042A58.749 58.749 0 0 0 1.409 54.301a5.079 5.079 0 0 0 5.041 5.578h4.447v-.027a48.982 48.982 0 0 1 48.981-48.981Z"
        fill="#82d5f6"
      />
      <path
        d="M21.106 59.853A38.772 38.772 0 0 1 59.879 21.08V10.871a48.982 48.982 0 0 0-48.982 48.982v.027h10.214c0-.01-.005-.019-.005-.027Z"
        fill="#009de0"
      />
      <path
        d="M21.106 59.879h33.731a5.041 5.041 0 0 0 5.041-5.042V21.08a38.772 38.772 0 0 0-38.772 38.799Z"
        fill="#004b96"
      />
      <path fill="none" d="M0 0h60v60H0z" />
    </g>
  </svg>
)

export default SvgLogoSymbol
