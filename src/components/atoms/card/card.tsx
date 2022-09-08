import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  children: React.ReactNode
  title?: string
  elevation?: 'S' | 'M' | 'L' | 'XL' | 'XXL'
  size?: number
  margin?: number
}

const Card: React.FC<Props> = (props) => {
  return (
    <CardWrap data-testid="atoms-c-wrap" {...props}>
      {props.title && <Title data-testid="atoms-c-title">{props.title}</Title>}
      {props.children}
    </CardWrap>
  )
}

const elevationColor = (props: Props): string => {
  switch (props.elevation) {
    case 'S':
      return Color.ELEVATION.S
    case 'M':
      return Color.ELEVATION.M
    case 'L':
      return Color.ELEVATION.L
    case 'XL':
      return Color.ELEVATION.XL
    case 'XXL':
      return Color.ELEVATION.XXL
    default:
      return Color.ELEVATION.S
  }
}

const CardWrap = styled.div<Props>`
  width: ${({ size }) => (size ? `${size}px` : '100%')};
  padding: 24px;
  margin-bottom: ${({ margin }) => (margin ? `${margin}px` : '0')};
  border-radius: 16px;
  background: ${Color.COMPONENT.SURFACE};
  box-shadow: ${elevationColor};
`
const Title = styled.div`
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`

export default Card
