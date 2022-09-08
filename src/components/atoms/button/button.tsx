import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  label: string
  type?: 'submit' | 'button' | 'reset'
  buttonType?: string | 'primary' | 'secondary' | 'danger'
  small?: boolean
  disabled?: boolean
  beforeIcon?: React.ReactNode
  afterIcon?: React.ReactNode
  form?: string
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const getColors = (props: Props): string => {
  if (props.buttonType === 'primary') {
    return `
      border: 1px solid ${Color.PRIMARY._500};
      background: ${Color.PRIMARY._500};
      font-weight: bold;
      color: ${Color.TEXT.WHITE};
      
      svg {
        fill: ${Color.TEXT.WHITE};
      }
      
      &:hover {
        border: 1px solid ${Color.PRIMARY._600};
        background: ${Color.PRIMARY._600};
      } 
    `
  } else if (props.buttonType === 'secondary') {
    return `
      border: 1px solid ${Color.COMPONENT.FORM_BORDER};
      background: ${Color.COMPONENT.SURFACE};
      color: ${Color.TEXT.BLACK};
      
      svg {
        fill: ${Color.TEXT.BLACK};
      }
      
      &:hover {
        background: ${Color.COMPONENT.WHITE_HOVER};
      }
    `
  } else if (props.buttonType === 'danger') {
    return `
      border: 1px solid ${Color.COMPONENT.DANGER};
      background: ${Color.COMPONENT.DANGER};
      font-weight: bold;
      color: ${Color.TEXT.WHITE};
      
      &:hover {
        background: ${Color.COMPONENT.DANGER_HOVER};
      }
    `
  } else {
    return `
      border: 1px solid ${Color.COMPONENT.SURFACE};
      background: ${Color.COMPONENT.SURFACE};
      color: ${Color.TEXT.GRAY};
      
      svg {
        fill: ${Color.TEXT.GRAY};
      }
      
      &:hover {
        background: ${Color.COMPONENT.WHITE_HOVER};
      }
    `
  }
}

const Button: React.FC<Props> = (props) => {
  return (
    <Wrap {...props} onClick={props.handleClick}>
      {props.beforeIcon && <BeforeIcon>{props.beforeIcon}</BeforeIcon>}
      <Text>{props.label}</Text>
      {props.afterIcon && <AfterIcon>{props.afterIcon}</AfterIcon>}
    </Wrap>
  )
}

const Wrap = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ small }) => (small ? '40px' : '48px')};
  padding: 0 ${({ small }) => (small ? '16px' : '24px')};
  border-radius: 8px;
  font-size: ${({ small }) => (small ? '14px' : '16px')};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-out;

  svg {
    width: 16px;
    height: 16px;
  }

  ${getColors}

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
      pointer-events: none;
    `}
`
const Text = styled.div`
  white-space: nowrap;
`
const BeforeIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`
const AfterIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 8px;
`

export default Button
