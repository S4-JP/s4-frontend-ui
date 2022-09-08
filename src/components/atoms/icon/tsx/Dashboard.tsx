import * as React from 'react'
import { SVGProps } from 'react'

const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-dashboard"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <g transform="translate(1.667 1.667)">
      <rect width={16.667} height={36.667} rx={6.5} />
      <rect width={16.667} height={16.667} rx={6.5} transform="translate(20)" />
      <rect
        width={16.667}
        height={16.667}
        rx={6.5}
        transform="translate(20 20)"
      />
    </g>
    <path fill="none" d="M0 0h40v40H0z" />
  </svg>
)

export default SvgDashboard
