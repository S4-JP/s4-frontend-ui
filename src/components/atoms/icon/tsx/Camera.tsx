import * as React from 'react'
import { SVGProps } from 'react'

const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-camera"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <g transform="translate(-173.392 -77.887)">
      <circle
        cx={6.412}
        cy={6.412}
        r={6.412}
        transform="translate(186.981 94.168)"
      />
      <path d="M210.234 87.233h-4.763a3.18 3.18 0 0 1-2.944-2.207l-.852-2.4a3.18 3.18 0 0 0-2.944-2.207h-10.677a3.179 3.179 0 0 0-2.944 2.207l-.852 2.4a3.18 3.18 0 0 1-2.944 2.207h-4.763a3.325 3.325 0 0 0-3.16 3.467v21.183a3.325 3.325 0 0 0 3.16 3.467h33.682a3.323 3.323 0 0 0 3.158-3.467V90.7a3.323 3.323 0 0 0-3.157-3.467Zm-16.842 22.914a9.567 9.567 0 1 1 9.568-9.566 9.578 9.578 0 0 1-9.568 9.566Zm13.764-14.573a2.239 2.239 0 1 1 2.24-2.24 2.238 2.238 0 0 1-2.24 2.24Z" />
    </g>
    <path fill="none" d="M0 0h40v40H0z" />
  </svg>
)

export default SvgCamera
