import * as React from 'react'
import { SVGProps } from 'react'

const SvgLogoMs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-logo-ms"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 19"
    {...props}
  >
    <path fill="#f25022" d="M0 0h9v9H0z" />
    <path fill="#00a4ef" d="M0 10h9v9H0z" />
    <path fill="#7fba00" d="M10 0h9v9h-9z" />
    <path fill="#ffb900" d="M10 10h9v9h-9z" />
  </svg>
)

export default SvgLogoMs
