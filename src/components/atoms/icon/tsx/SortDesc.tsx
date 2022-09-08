import * as React from 'react'
import { SVGProps } from 'react'

const SvgSortDesc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-sort-desc"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 15"
    {...props}
  >
    <path fill="none" d="M32 137h40v40H32z" />
    <path d="M.579 4.478 7.8 13.912a2.772 2.772 0 0 0 4.4 0l7.218-9.434A2.783 2.783 0 0 0 17.218 0H2.782a2.784 2.784 0 0 0-2.2 4.478" />
  </svg>
)

export default SvgSortDesc
