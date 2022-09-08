import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../icon'
import { IconImage } from '../icon-image'

type Props = {
  name?: string
  defaultData: {
    value: string
    label: string
    image?: string
    icon?: React.ReactNode
  }
  data?: any[]
  top?: boolean
  className?: string
  disabled?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const Select: React.FC<Props> = (props) => {
  const [onFocus, setOnFocus] = useState(false)
  const [selectedItem, setSelectedItem] = useState<any>(props.defaultData)
  const selectedItemElement = useRef(null)
  const optionItemElement = useRef(null)

  const handleFocus = () => {
    setOnFocus(true)
  }

  const handleChange = (opt) => {
    setSelectedItem(opt)
  }

  const closeSelect = (e) => {
    if (
      e.target !== selectedItemElement.current &&
      e.target !== optionItemElement.current
    ) {
      setOnFocus(false)
    }
  }

  const checkedValue = (val) => {
    return selectedItem.value === val
  }

  useEffect(() => {
    document.addEventListener('click', closeSelect)
    return () => document.removeEventListener('click', closeSelect)
  }, [])

  useEffect(() => {
    setSelectedItem(props.defaultData)
  }, [props.defaultData])

  return (
    <Wrap
      data-testid="atoms-f-select-wrap"
      className={props.className}
      disabled={props.disabled}
    >
      <SelectedItem
        data-testid="atoms-f-select-selected-item"
        ref={selectedItemElement}
        focus={onFocus}
        onClick={handleFocus}
      >
        {selectedItem.image && (
          <StyledIconImage
            data-testid="atoms-f-select-selected-item-image"
            src={selectedItem.image}
            size={24}
          />
        )}
        {selectedItem.icon && (
          <StyledIcon data-testid="atoms-f-select-selected-item-icon">
            {selectedItem.icon}
          </StyledIcon>
        )}
        <SelectedItemLabel data-testid="atoms-f-select-selected-item-label">
          {selectedItem.label}
        </SelectedItemLabel>
        <IconWrap data-testid="atoms-f-select-selected-item-icon-wrap">
          <Icon.ChevronDown color={Color.TEXT.BLACK} size={12} />
        </IconWrap>
      </SelectedItem>

      <Options
        data-testid="atoms-f-select-options"
        ref={optionItemElement}
        isShow={onFocus}
        position={props.top}
      >
        <label data-testid="atoms-f-select-options-label" htmlFor={props.name}>
          {props.data.map((opt, i) => (
            <OptionItem
              key={i}
              checked={checkedValue(opt.value)}
              icon={opt.image}
            >
              <input
                data-testid={`atoms-f-select-options-input-${i}`}
                type="radio"
                name={props.name}
                value={opt.value}
                onClick={(e) => {
                  props.handleClick && props.handleClick(e)
                  handleChange(opt)
                }}
                onChange={props.onChange}
              />
              {opt.image && (
                <StyledIconImage
                  data-testid={`atoms-f-select-options-icon-image-${i}`}
                  src={opt.image}
                  size={24}
                />
              )}
              {opt.icon && (
                <StyledIcon data-testid={`atoms-f-select-options-icon-${i}`}>
                  {opt.icon}
                </StyledIcon>
              )}
              <TextWrap data-testid={`atoms-f-select-options-text-wrap-${i}`}>
                {opt.label}
              </TextWrap>
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

const Wrap = styled.div<{ disabled?: boolean }>`
  position: relative;
  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
  `}
`
const SelectedItem = styled.div<{ focus: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  width: 240px;
  height: 40px;
  padding: ${({ focus }) => (focus ? `0 15px` : `0 16px`)};
  border: ${({ focus }) =>
    focus
      ? `2px solid ${Color.PRIMARY._500}`
      : `1px solid ${Color.COMPONENT.FORM_BORDER}`};
  border-radius: 8px;
  background: ${Color.COMPONENT.SURFACE};
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;
`
const SelectedItemLabel = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  width: 140px;
  height: 100%;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
`
const IconWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
  pointer-events: none;
`
const Options = styled.div<{ isShow: boolean; position: boolean }>`
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  left: 0;
  width: 240px;
  max-height: 250px;
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
const OptionItem = styled.label<{ checked: boolean; icon: string }>`
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-bottom: 8px;
  padding: ${({ icon }) => (icon ? '8px' : '10px 8px')};
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
const StyledIconImage = styled(IconImage)`
  margin-right: 8px;
`
const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`
const TextWrap = styled.div`
  width: 175px;
  margin: auto;
  word-wrap: break-word;
`

export default Select
