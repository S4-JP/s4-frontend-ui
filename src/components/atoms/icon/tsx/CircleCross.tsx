import * as React from 'react'
import { SVGProps } from 'react'

const SvgCircleCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-circle-cross"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path d="M20.001-.003a20 20 0 1 0 20 20 20 20 0 0 0-20-20Zm9.17 26.173a2.121 2.121 0 1 1-3 3l-6.174-6.174-6.174 6.174a2.169 2.169 0 0 1-3 0 2.123 2.123 0 0 1 0-3l6.172-6.172-6.172-6.174a2.121 2.121 0 1 1 3-3l6.174 6.174 6.174-6.174a2.121 2.121 0 1 1 3 3l-6.172 6.174Z" />
    <path fill="none" d="M0 0h40v40H0z" />
  </svg>
)

export default SvgCircleCross
