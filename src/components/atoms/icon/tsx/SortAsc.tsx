import * as React from 'react'
import { SVGProps } from 'react'

const SvgSortAsc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-sort-asc"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 15"
    {...props}
  >
    <path fill="none" d="M32 137h40v40H32z" />
    <path d="M19.421 10.522 12.2 1.088a2.772 2.772 0 0 0-4.4 0L.579 10.522A2.783 2.783 0 0 0 2.78 15h14.438a2.784 2.784 0 0 0 2.2-4.478" />
  </svg>
)

export default SvgSortAsc
