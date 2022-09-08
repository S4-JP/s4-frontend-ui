import * as React from 'react'
import { SVGProps } from 'react'

const SvgError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-error"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path d="M20 0a20 20 0 1 0 20 20A20 20 0 0 0 20 0Zm0 31.315a2.714 2.714 0 1 1 2.714-2.714A2.713 2.713 0 0 1 20 31.315Zm2.714-10.87a2.714 2.714 0 1 1-5.428 0v-9.046a2.714 2.714 0 0 1 5.428 0Z" />
    <path fill="none" d="M0 0h40v40H0z" />
  </svg>
)

export default SvgError
