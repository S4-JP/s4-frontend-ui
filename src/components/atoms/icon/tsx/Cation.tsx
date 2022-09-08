import * as React from 'react'
import { SVGProps } from 'react'

const SvgCation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-caption"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <g transform="translate(-32 -137)">
      <path d="m69.212 163.432-11.543-19.788a6.562 6.562 0 0 0-11.336 0l-11.545 19.789a6.561 6.561 0 0 0 5.669 9.868h23.086a6.564 6.564 0 0 0 5.669-9.87Zm-17.209 4.741a2.263 2.263 0 1 1 2.263-2.263 2.263 2.263 0 0 1-2.263 2.263Zm2.263-9.065a2.264 2.264 0 0 1-4.527 0v-7.545a2.264 2.264 0 0 1 4.527 0Z" />
      <rect transform="translate(32 137)" fill="none" />
    </g>
  </svg>
)

export default SvgCation
