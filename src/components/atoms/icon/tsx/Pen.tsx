import * as React from 'react'
import { SVGProps } from 'react'

const SvgPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-pen"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M0 0h40v40H0z" />
    <path d="m35.405 12.936-8.342-8.342a2.134 2.134 0 0 1 0-3.014l.021-.021a5.326 5.326 0 0 1 7.532 0l3.824 3.824a5.326 5.326 0 0 1 0 7.532l-.021.021a2.13 2.13 0 0 1-3.014 0Zm-16.789 19.8 14.1-14.1a2.133 2.133 0 0 0 0-3.014l-8.342-8.34a2.13 2.13 0 0 0-3.014 0l-14.1 14.1a2.133 2.133 0 0 0 0 3.014l8.342 8.342a2.13 2.13 0 0 0 3.015.001ZM1.975 39.97l10.126-1.778a1.683 1.683 0 0 0 .9-2.847l-8.348-8.348a1.682 1.682 0 0 0-2.847.9L.029 38.024a1.683 1.683 0 0 0 1.947 1.949Z" />
  </svg>
)

export default SvgPen
