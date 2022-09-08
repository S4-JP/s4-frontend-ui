import * as React from 'react'
import { SVGProps } from 'react'

const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-slider"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M0 0h40v40H0z" />
    <path d="M36.47 8.348h-14.7a8.117 8.117 0 0 0-14.672 0H3.529a3.53 3.53 0 1 0 0 7.059h3.57a8.118 8.118 0 0 0 14.672 0h14.7a3.53 3.53 0 0 0 0-7.059Zm-19.158 3.53A2.877 2.877 0 1 1 14.435 9a2.879 2.879 0 0 1 2.877 2.878ZM3.529 31.653h14.7a8.118 8.118 0 0 0 14.672 0h3.57a3.53 3.53 0 0 0 0-7.059h-3.57a8.118 8.118 0 0 0-14.672 0h-14.7a3.53 3.53 0 1 0 0 7.059Zm19.158-3.53A2.877 2.877 0 1 1 25.564 31a2.879 2.879 0 0 1-2.876-2.876Z" />
  </svg>
)

export default SvgSlider
