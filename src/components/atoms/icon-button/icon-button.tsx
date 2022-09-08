import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  focus?: boolean
  children: React.ReactNode
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const IconButton: React.FC<Props> = (props) => {
  return (
    <Wrap
      data-testid="atoms-ib-wrap"
      focus={props.focus}
      onClick={props.handleClick}
    >
      {props.children}
    </Wrap>
  )
}

const Wrap = styled.div<{ focus?: boolean }>`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  transition: background 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background: ${Color.COMPONENT.WHITE_HOVER};
  }

  svg {
    width: 16px;
    height: 16px;
    fill: ${Color.TEXT.GRAY};
  }

  ${({ focus }) =>
    focus &&
    `
    background: ${Color.PRIMARY._500};
    
    svg {
      fill: ${Color.COMPONENT.SURFACE}
    }
    
    &:hover {
      background: ${Color.PRIMARY._500};
      
      svg {
        fill: ${Color.COMPONENT.SURFACE}
      }
    }
  `}
`

export default IconButton
