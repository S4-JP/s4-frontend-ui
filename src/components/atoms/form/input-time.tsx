import React, { useContext, useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../icon'
import { IconButton } from '../icon-button'
import { InputText } from '../form'
import { Time } from '../../../const/time'

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
  selectedTime?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.SyntheticEvent) => void
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onClick?(e: React.MouseEvent<HTMLElement>): void
  position?: boolean
}

const InputTime: React.FC<Props> = (props) => {
  const [onFocus, setOnFocus] = useState(false)
  const documentClickHandler = useRef(null)
  const selectedItemElement = useRef(null)

  const handleClick = () => {
    setOnFocus(!onFocus)
    document.addEventListener('click', documentClickHandler.current)
  }

  const selectedTime = () => {
    setOnFocus(false)
  }

  useEffect(() => {
    documentClickHandler.current = (e) => {
      if (selectedItemElement.current.contains(e.target)) return
      /* istanbul ignore next */
      setOnFocus(false)
    }

    return () =>
      document.removeEventListener('click', documentClickHandler.current)
  }, [])

  return (
    <Wrap data-testid="atoms-f-input-time-wrap" ref={selectedItemElement}>
      <StyledInputText
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        size={props.size}
        invalidMessage={props.invalidMessage}
      />
      <IconButton focus={onFocus} handleClick={handleClick}>
        <Icon.Time size={16} color={Color.TEXT.GRAY} />
      </IconButton>

      <Options
        data-testid="atoms-f-input-time-options"
        isShow={onFocus}
        position={!!props.position}
      >
        <label htmlFor={'option_time'}>
          {Time.map((opt, i) => (
            <OptionItem
              data-testid={`atoms-f-input-time-option-item-${i}`}
              key={i}
              checked={opt === props.selectedTime}
            >
              <input
                type="radio"
                name={'option_time'}
                value={opt}
                onClick={props.onClick}
                onChange={selectedTime}
              />
              {opt}
            </OptionItem>
          ))}
        </label>
      </Options>
    </Wrap>
  )
}

const anime = keyframes`
  0% {
    display: block;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`
const Wrap = styled.div`
  display: flex;
  position: relative;
`
const StyledInputText = styled(InputText)`
  margin-right: 20px;

  &::placeholder {
    color: ${Color.TEXT.GRAY};
  }

  > div {
    white-space: nowrap;
  }
`
const Options = styled.div<{ isShow: boolean; position: boolean }>`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  left: calc(100% - 40px);
  width: 240px;
  max-height: 200px;
  padding: 8px;
  border-radius: 8px;
  background: ${Color.COMPONENT.SURFACE};
  box-shadow: ${Color.ELEVATION.L};
  scroll-behavior: smooth;
  overflow: scroll;
  animation: ${anime} 0.1s ease-out;
  z-index: 10;

  ${({ position }) =>
    position
      ? `
    bottom: 50px;
  `
      : `
    top: 50px;
  `}

  &::-webkit-scrollbar {
    display: none;
  }

  input {
    display: none;
  }
`
const OptionItem = styled.label<{ checked: boolean }>`
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-bottom: 8px;
  padding: 10px 8px;
  border-radius: 8px;
  background: ${({ checked }) =>
    checked ? Color.COMPONENT.WHITE_HOVER : Color.COMPONENT.SURFACE};
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

export default InputTime
