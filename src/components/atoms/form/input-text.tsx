import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../icon'

type Props = {
  name?: string
  placeholder?: string
  type?: string
  value?: string | number
  defaultValue?: string | number
  maxLength?: number
  disabled?: boolean
  ref?: any
  invalidMessage?: string
  icon?: React.ReactNode
  size?: 'S' | 'M' | 'L' | 'XL' | 'XXL'
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.SyntheticEvent) => void
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent) => void
  onKeyUp?: (e: React.KeyboardEvent) => void
}

const InputText: React.FC<Props> = (props: any) => {
  return (
    <Wrap data-testid="atoms-f-input-text-wrap" size={props.size}>
      <InputWrap data-testid="atoms-f-input-text-input-wrap">
        {props.icon && (
          <IconWrap data-testid="atoms-f-input-text-icon-wrap">
            {props.icon}
          </IconWrap>
        )}
        <StyledInput
          data-testid="atoms-f-input-text-styled-input"
          {...props}
          ref={props.ref}
          isInvalid={!!props.invalidMessage}
          disabled={props.disabled}
        />
        {props.invalidMessage && (
          <IconErrorWrap data-testid="atoms-f-input-text-icon-error-wrap">
            <Icon.Error color={Color.COMPONENT.DANGER} />
          </IconErrorWrap>
        )}
      </InputWrap>
      {props.invalidMessage && (
        <InvalidMessage data-testid="atoms-f-input-text-invalid-message">
          {props.invalidMessage}
        </InvalidMessage>
      )}
    </Wrap>
  )
}

const widthSize = (props: Props): string => {
  switch (props.size) {
    case 'S':
      return '80px'
    case 'M':
      return '104px'
    case 'L':
      return '240px'
    case 'XL':
      return '320px'
    case 'XXL':
      return '480px'
    default:
      return '80px'
  }
}

const Wrap = styled.div<Props>`
  width: ${widthSize};
`
const InputWrap = styled.div`
  position: relative;
`
const StyledInput = styled.input<{
  icon?: React.ReactNode
  isInvalid?: boolean
  disabled?: boolean
}>`
  width: 100%;
  height: 40px;
  border: 1px solid ${Color.COMPONENT.FORM_BORDER};
  border-radius: 8px;
  padding: 16px;
  font-size: 14px;
  appearance: none;

  &:focus {
    padding: 15px;
    border: 2px solid ${Color.PRIMARY._500};
    outline: none;
  }

  &:disabled {
    background: ${Color.COMPONENT.SURFACE};
    color: ${Color.TEXT.GRAY};
  }

  &::placeholder {
    color: ${Color.TEXT.GRAY};
  }

  ${({ icon }) => icon && `padding-left: 40px !important;`}

  ${({ isInvalid }) =>
    isInvalid &&
    `
      padding-right: 40px;
      border: 2px solid ${Color.COMPONENT.DANGER};
      
      &:focus {
        border: 2px solid ${Color.COMPONENT.DANGER};
      }
  `}
`
const IconWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  height: 16px;
  transform: translate(0, -50%);
  line-height: 1;
`
const IconErrorWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  height: 16px;
  transform: translate(0, -50%);
`
const InvalidMessage = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${Color.COMPONENT.DANGER};
`

export default InputText
