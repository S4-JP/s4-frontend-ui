import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../icon'

type Props = {
  name: string
  value: string | number
  color?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  checked?: boolean
  statusValue?: number
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const statusIcon = (value) => {
  switch (value) {
    case 1:
      return <Icon.StatusBacklog />
    case 2:
      return <Icon.StatusProgress />
    case 9:
      return <Icon.StatusDone />
    case 3:
      return <Icon.StatusClosed />
  }
}

const SearchCheckbox: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="atoms-sc-wrap">
      <input
        data-testid="atoms-sc-input"
        type="checkbox"
        name={props.name}
        value={props.value}
        checked={props.checked ?? props.checked}
        onChange={props.onChange && props.onChange}
      />
      <Text data-testid="atoms-sc-text" onClick={props.handleClick}>
        {props.color && (
          <UrgencyBar data-testid="atoms-sc-urgency-bar" color={props.color} />
        )}
        {props.icon && (
          <IconWrap data-testid="atoms-sc-icon-wrap">{props.icon}</IconWrap>
        )}
        {props.statusValue && (
          <IconWrap data-testid="atoms-sc-icon-wrap">
            {statusIcon(props.statusValue)}
          </IconWrap>
        )}
        {props.children}
      </Text>
    </Wrap>
  )
}

const Wrap = styled.label`
  display: inline-block;
  border-radius: 8px;
  background: ${Color.COMPONENT.SURFACE};
  overflow: hidden;

  input {
    display: none;

    &:checked + span {
      padding: 0 15px;
      border: 2px solid ${Color.PRIMARY._500};
      background: ${Color.COMPONENT.WHITE_HOVER};
    }
  }
`
const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0 16px;
  border: 1px solid ${Color.COMPONENT.FORM_BORDER};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: ${Color.COMPONENT.WHITE_HOVER};
  }
`
const UrgencyBar = styled.div<{ color?: string }>`
  width: 8px;
  height: 16px;
  margin-right: 8px;
  border-radius: 4px;
  background: ${({ color }) => color && color};
`
const IconWrap = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 8px;

  svg {
    width: 16px;
    height: 16px;
  }
`

export default SearchCheckbox
