import * as React from 'react'
import { SVGProps } from 'react'

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-search"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path d="M39.321 36.051 29.056 25.785a16.163 16.163 0 1 0-3.27 3.273L36.05 39.32a2.313 2.313 0 0 0 3.271-3.269Zm-31.33-11.77a11.519 11.519 0 1 1 8.143 3.373 11.53 11.53 0 0 1-8.143-3.373Z" />
    <path fill="none" d="M0 0h40v40H0z" />
  </svg>
)

export default SvgSearch
