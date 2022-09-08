import * as React from 'react'
import { SVGProps } from 'react'

const SvgBtnNavOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-btn-nav-open"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="M32.002 32h-32V0a32 32 0 0 1 32 32ZM8.227 20.023h8.449l-.258.116a1.751 1.751 0 0 0-.431.314l-2.374 2.383a.891.891 0 0 0-.125 1.14 1.116 1.116 0 0 0 .074.084.86.86 0 0 0 1.216 0l4.3-4.3a.859.859 0 0 0 0-1.215l-4.3-4.3a.783.783 0 0 0-.088-.074.861.861 0 0 0-1.2.186.891.891 0 0 0 .125 1.14l2.379 2.379a1.717 1.717 0 0 0 .486.344l.185.086H8.182a.854.854 0 0 0-.149.011.86.86 0 0 0-.71.987.891.891 0 0 0 .902.719Z"
      fill="#05abef"
    />
  </svg>
)

export default SvgBtnNavOpen
