import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  label?: string
  className?: string
  children?: React.ReactNode
  marginBottom?: number
  required?: boolean
}

const FormField: React.FC<Props> = (props) => {
  return (
    <Wrap
      data-testid="molecules-form-field"
      className={props.className}
      marginBottom={props.marginBottom}
    >
      {props.label && (
        <Label>
          {props.label}
          {props.required && <Required>★</Required>}
        </Label>
      )}
      <ChildrenWrap>{props.children}</ChildrenWrap>
    </Wrap>
  )
}

const Wrap = styled.div<{ marginBottom?: number }>`
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}px`};
  font-size: 14px;
`
const Label = styled.p`
  display: flex;
  margin-bottom: 8px;
  font-size: 14px;
  color: ${Color.TEXT.GRAY};
  line-height: 1.43;
  width: 100%;
`
const ChildrenWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  > * {
    margin-right: 8px;

    &:last-of-type {
      margin: 0;
    }
  }
`
const Required = styled.span`
  display: block;
  margin-left: 4px;
  font-size: 10px;
  color: ${Color.COMPONENT.DANGER};
  transform: scale(0.7);
`

export default FormField
