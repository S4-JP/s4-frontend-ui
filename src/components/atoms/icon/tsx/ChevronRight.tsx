import * as React from 'react'
import { SVGProps } from 'react'

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-chevron-right"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M40 40H0V0h40z" />
    <path d="M13.349 3.741a2.954 2.954 0 0 0 0 4.086l12.172 12.174-12.175 12.175a2.89 2.89 0 0 0 4.088 4.086l14.218-14.218a2.885 2.885 0 0 0 0-4.086L17.434 3.741a2.885 2.885 0 0 0-4.086 0Z" />
  </svg>
)

export default SvgChevronRight
