import * as React from 'react'
import styled from 'styled-components'

interface Props {
  glyph: string
  color: string
  size?: number
}

const IconWrap: React.FC<Props> = (props) => {
  const { glyph: Glyph, ...options } = props

  return (
    <IconWrapper data-testid="atoms-i-icon-wrap" {...options}>
      <Glyph />
    </IconWrapper>
  )
}

const IconWrapper = styled.span<{ color: string; size?: number }>`
  width: ${({ size }) => (size ? size : 16)}px;
  height: ${({ size }) => (size ? size : 16)}px;
  fill: ${({ color }) => color};
  svg {
    width: ${({ size }) => (size ? size : 16)}px;
    height: ${({ size }) => (size ? size : 16)}px;
  }
`

export default IconWrap
