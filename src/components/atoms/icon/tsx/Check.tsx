import * as React from 'react'
import { SVGProps } from 'react'

const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-check"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M0 0h40v40H0z" />
    <path d="M14.091 34.242a2.57 2.57 0 0 1-1.823-.755L.755 21.975a2.578 2.578 0 1 1 3.647-3.644l9.69 9.69L35.599 6.512a2.578 2.578 0 1 1 3.644 3.647L15.914 33.487a2.57 2.57 0 0 1-1.823.755Z" />
  </svg>
)

export default SvgCheck
