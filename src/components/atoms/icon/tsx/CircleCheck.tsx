import * as React from 'react'
import { SVGProps } from 'react'

const SvgCircleCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-circle-check"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path d="M20-.003a20 20 0 1 0 20 20 20 20 0 0 0-20-20Zm11.386 14.875-13.7 13.7a2.119 2.119 0 0 1-3 0L7.924 21.81a2.121 2.121 0 1 1 3-3l5.262 5.262 12.2-12.2a2.121 2.121 0 0 1 3 3Z" />
    <path fill="none" d="M0 0h40v40H0z" />
  </svg>
)

export default SvgCircleCheck
