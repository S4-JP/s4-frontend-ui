import * as React from 'react'
import { SVGProps } from 'react'

const SvgBtnNavClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-btn-nav-close"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="M32 32H0V0a32.389 32.389 0 0 1 10.085 1.622A31.93 31.93 0 0 1 32 32ZM7.558 19.757l4.3 4.3a.86.86 0 0 0 1.216 0 1.113 1.113 0 0 0 .074-.084.891.891 0 0 0-.125-1.14s-1.673-1.709-2.374-2.383-.272-.232-.431-.314l-.258-.116h8.449a.891.891 0 0 0 .907-.723.86.86 0 0 0-.71-.987.856.856 0 0 0-.149-.011H9.974l.185-.086a1.717 1.717 0 0 0 .486-.344l2.379-2.379a.891.891 0 0 0 .125-1.14.861.861 0 0 0-1.2-.186.783.783 0 0 0-.088.074l-4.3 4.3a.859.859 0 0 0-.003 1.219Z"
      fill="#05abef"
    />
  </svg>
)

export default SvgBtnNavClose
