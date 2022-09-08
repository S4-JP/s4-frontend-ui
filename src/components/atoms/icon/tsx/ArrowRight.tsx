import * as React from 'react'
import { SVGProps } from 'react'

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-arrow-right"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M40 40H0V0h40z" />
    <path d="M4.163 22.963a2.571 2.571 0 0 0 .445.034h25.4l-.553.257A5.141 5.141 0 0 0 28 24.284l-7.122 7.122a2.669 2.669 0 0 0-.375 3.413 2.577 2.577 0 0 0 3.6.557 2.347 2.347 0 0 0 .264-.222l12.877-12.877a2.574 2.574 0 0 0 0-3.643L24.366 5.754a2.576 2.576 0 0 0-3.643.006 3.322 3.322 0 0 0-.222.251 2.668 2.668 0 0 0 .375 3.413l7.108 7.136a5.2 5.2 0 0 0 1.289.94l.772.347h-25.3a2.666 2.666 0 0 0-2.717 2.164 2.575 2.575 0 0 0 2.135 2.952Z" />
  </svg>
)

export default SvgArrowRight
