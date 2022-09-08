import * as React from 'react'
import { SVGProps } from 'react'

const SvgChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-chevron-down"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M0 40V0h40v40z" />
    <path d="M36.259 13.349a2.954 2.954 0 0 0-4.086 0L19.999 25.521 7.824 13.346a2.89 2.89 0 0 0-4.086 4.088l14.218 14.218a2.885 2.885 0 0 0 4.086 0l14.217-14.218a2.885 2.885 0 0 0 0-4.086Z" />
  </svg>
)

export default SvgChevronDown
