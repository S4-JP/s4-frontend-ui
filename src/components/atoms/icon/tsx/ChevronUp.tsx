import * as React from 'react'
import { SVGProps } from 'react'

const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-chevron-up"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M40 0v40H0V0z" />
    <path d="M3.741 26.651a2.954 2.954 0 0 0 4.086 0l12.174-12.172 12.175 12.175a2.89 2.89 0 0 0 4.086-4.088L22.044 8.348a2.885 2.885 0 0 0-4.086 0L3.741 22.566a2.885 2.885 0 0 0 0 4.086Z" />
  </svg>
)

export default SvgChevronUp
