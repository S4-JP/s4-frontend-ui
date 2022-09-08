import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from '../../atoms/icon'
import { IconButton } from '../../atoms/icon-button'

type Props = {
  value?: string
  isShow: boolean
  children: React.ReactNode
  margin?: number
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const FormFieldMask: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="molecules-ffm-wrap">
      <Mask
        data-testid="molecules-ffm-mask"
        isShow={props.isShow}
        margin={props.margin}
      >
        {props.value && <Text>{props.value}</Text>}
        <IconButton handleClick={props.handleClick}>
          <Icon.Pen />
        </IconButton>
      </Mask>
      <Form data-testid="molecules-ffm-form" isShow={props.isShow}>
        {props.children}
      </Form>
    </Wrap>
  )
}
const Wrap = styled.div``
const Mask = styled.div<Props>`
  display: ${({ isShow }) => (isShow ? 'none' : 'flex')};
  align-items: center;
  margin-bottom: ${({ margin }) => (margin ? `${margin}px` : '0')};
`
const Text = styled.div`
  max-width: 100%;
  margin-right: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.71;
`
const Form = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};

  > div {
    margin: 0 8px 0 0;
  }
`

export default FormFieldMask
