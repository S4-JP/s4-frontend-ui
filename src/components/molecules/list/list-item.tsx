import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  large?: boolean
  className?: string
  size?: number
  disabled?: boolean
  children?: React.ReactNode
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const ListItem: React.FC<Props> = (props) => {
  return (
    <Wrap
      data-testid="molecules-li-wrap"
      {...props}
      onClick={props.handleClick}
    >
      {props.children}
    </Wrap>
  )
}

const Wrap = styled.li<Props>`
  position: relative;
  padding: 10px 16px;
  height: ${({ size }) => (size ? `${size}px` : 'auto')};
  border-radius: 8px;
  background: ${Color.COMPONENT.SURFACE};
  box-shadow: ${Color.ELEVATION.S};
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin-bottom: 0;
  }
  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
    `}
  ${({ onClick }) =>
    onClick &&
    `
      cursor: pointer;
  `}
  &:hover {
    background: ${Color.COMPONENT.WHITE_HOVER};
  }
  > div {
    display: flex;
    align-items: center;
  }
`

export default ListItem
