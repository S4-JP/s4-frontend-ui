import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  label: string
  handleClick(e: React.MouseEvent<HTMLElement>): void
}

const PopupSelectItem: React.FC<Props> = (props) => {
  return (
    <OptionItem
      data-testid="molecules-psi-option-item"
      onClick={props.handleClick}
    >
      {props.label}
    </OptionItem>
  )
}

const OptionItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 8px;
  background: Color.COMPONENT.WHITE_HOVER : Color.COMPONENT.SURFACE};
  font-size: 14px;
  cursor: pointer;
  line-height: 1.4;

  &:last-child {
    margin: 0;
  }

  &:hover {
    background: ${Color.COMPONENT.WHITE_HOVER};
  }
`

export default PopupSelectItem
