import * as React from 'react'
import { SVGProps } from 'react'

const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-testid="atoms-icon-svg-user"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 40"
    {...props}
  >
    <path fill="none" d="M0 0h40v40H0z" />
    <path d="M28.433 20.854a2 2 0 0 0-1.92.181 13.026 13.026 0 0 1-13.314.106 2.014 2.014 0 0 0-1.944-.148 15.5 15.5 0 0 0-8.489 14.081A5.119 5.119 0 0 0 7.942 40h24.111a5.125 5.125 0 0 0 5.176-4.945 15.489 15.489 0 0 0-8.796-14.201ZM19.775 19.928a9.64 9.64 0 0 0 7.04-2.917 9.952 9.952 0 0 0 2.922-7.051 9.645 9.645 0 0 0-2.917-7.038A9.944 9.944 0 0 0 19.774 0a9.639 9.639 0 0 0-7.043 2.917 9.947 9.947 0 0 0-2.923 7.051 9.646 9.646 0 0 0 2.917 7.038 9.951 9.951 0 0 0 7.05 2.922Z" />
  </svg>
)

export default SvgUser
