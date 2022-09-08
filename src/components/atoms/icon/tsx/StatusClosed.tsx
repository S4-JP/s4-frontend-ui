import * as React from 'react'
import { SVGProps } from 'react'

const SvgStatusClosed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-status-closed"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <g transform="translate(-32 -137)">
      <path fill="none" d="M32 137h40v40H32z" />
      <rect
        width={26}
        height={4}
        rx={2}
        transform="translate(39 155)"
        fill="#d4d7dd"
      />
    </g>
  </svg>
)

export default SvgStatusClosed
