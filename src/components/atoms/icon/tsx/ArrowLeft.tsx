import * as React from 'react'
import { SVGProps } from 'react'

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-arrow-left"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M0 0h40v40H0z" />
    <path d="M35.837 17.911a2.571 2.571 0 0 0-.445-.034h-25.4l.553-.257A5.141 5.141 0 0 0 12 16.59l7.122-7.122a2.669 2.669 0 0 0 .375-3.413 2.577 2.577 0 0 0-3.6-.557 2.347 2.347 0 0 0-.264.222L2.756 18.597a2.574 2.574 0 0 0 0 3.643l12.878 12.88a2.576 2.576 0 0 0 3.643-.006 3.322 3.322 0 0 0 .222-.251 2.668 2.668 0 0 0-.375-3.413l-7.108-7.136a5.2 5.2 0 0 0-1.289-.94l-.772-.347h25.3a2.666 2.666 0 0 0 2.717-2.164 2.575 2.575 0 0 0-2.135-2.952Z" />
  </svg>
)

export default SvgArrowLeft
