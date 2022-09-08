import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  isShow: boolean
  children: React.ReactNode
}

const PopupSelect: React.FC<Props> = (props) => {
  return (
    <Options data-testid="molecules-ps-options" isShow={props.isShow}>
      {props.children}
    </Options>
  )
}

const Options = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 133px;
  left: 115px;
  width: 160px;
  max-height: 200px;
  padding: 8px;
  border-radius: 8px;
  background: ${Color.COMPONENT.SURFACE};
  box-shadow: ${Color.ELEVATION.L};
  scroll-behavior: smooth;
  z-index: 10;
`

export default PopupSelect
