import * as React from 'react'
import { SVGProps } from 'react'

const SvgCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-cross"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M0 0h40v40H0z" />
    <path d="M23.92 20 36.004 7.914a2.771 2.771 0 0 0-3.918-3.92L20 16.08 7.91 3.991a2.771 2.771 0 0 0-3.918 3.92L16.08 20 3.996 32.084a2.771 2.771 0 1 0 3.914 3.92L20 23.918l12.086 12.086a2.771 2.771 0 0 0 3.918-3.92Z" />
  </svg>
)

export default SvgCross
