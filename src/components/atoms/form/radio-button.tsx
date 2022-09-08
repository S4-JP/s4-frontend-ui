import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  checked?: boolean
  onChange?: (e: React.SyntheticEvent) => void
  value?: string
  name?: string
  labelName: string
  small?: boolean
}

const RadioButton: React.FC<Props> = (props) => {
  return (
    <StyledRadioButton data-testid="atoms-f-radio-label-name">
      <Marker
        data-testid="atoms-f-radio-marker"
        checked={props.checked}
        small={props.small}
      />
      {props.labelName}
      <InnerInput
        data-testid="atoms-f-radio-inner-input"
        type={'radio'}
        {...props}
      />
    </StyledRadioButton>
  )
}

const StyledRadioButton = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`
const Marker = styled.div<{ checked?: boolean; small?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ small }) => (small ? 16 : 24)}px;
  min-width: ${({ small }) => (small ? 16 : 24)}px;
  height: ${({ small }) => (small ? 16 : 24)}px;
  min-height: ${({ small }) => (small ? 16 : 24)}px;
  margin-right: 8px;
  border: 2px solid ${Color.COMPONENT.FORM_BORDER};
  border-radius: 12px;

  &::before {
    display: none;
    width: ${({ small }) => (small ? 8 : 12)}px;
    min-width: ${({ small }) => (small ? 8 : 12)}px;
    height: ${({ small }) => (small ? 8 : 12)}px;
    min-height: ${({ small }) => (small ? 8 : 12)}px;
    border-radius: 6px;
    background: ${Color.PRIMARY._500};
    content: '';
  }

  ${({ checked }) =>
    checked &&
    `
    border: 2px solid ${Color.PRIMARY._500};
    
    &::before {
      display: block;
    }
  `}
`
const InnerInput = styled.input`
  display: none;
`

export default RadioButton
