import * as React from 'react'
import { SVGProps } from 'react'

const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-chevron-left"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M0 0h40v40H0z" />
    <path d="M26.651 36.259a2.954 2.954 0 0 0 0-4.086L14.479 19.999 26.654 7.824a2.89 2.89 0 0 0-4.088-4.086L8.348 17.956a2.885 2.885 0 0 0 0 4.086l14.218 14.217a2.885 2.885 0 0 0 4.086 0Z" />
  </svg>
)

export default SvgChevronLeft
