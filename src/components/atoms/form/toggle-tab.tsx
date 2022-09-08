import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  label?: string
  checked?: boolean
  onChange?: (e: React.SyntheticEvent) => void
}

const ToggleTab: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="atoms-f-toggle-tab-label">
      <input
        data-testid="atoms-f-toggle-tab-input"
        type="radio"
        {...props}
        checked={props.checked}
      />
      <span data-testid="atoms-f-toggle-tab-span">{props.label}</span>
    </Wrap>
  )
}

const Wrap = styled.label`
  cursor: pointer;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 16px;
    border: 1px solid ${Color.COMPONENT.FORM_BORDER};
  }

  input {
    display: none;
  }

  input[type='radio']:checked + span {
    background: ${Color.COMPONENT.WHITE_HOVER};
    outline: 2px solid ${Color.PRIMARY._500};
    outline-offset: -2px;
  }
`

export default ToggleTab
