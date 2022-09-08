import * as React from 'react'
import { SVGProps } from 'react'

const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-plus"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path d="M37.189 17.184H22.813V2.811a2.811 2.811 0 0 0-5.621 0v14.373H2.807a2.811 2.811 0 0 0 0 5.621h14.381v14.379a2.811 2.811 0 1 0 5.621 0V22.808h14.376a2.811 2.811 0 0 0 0-5.621Z" />
    <path fill="none" d="M0 0h40v40H0z" />
  </svg>
)

export default SvgPlus
