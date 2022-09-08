import React, { useState } from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../icon/'

type Props = {
  children?: string
  focus?: boolean
  sort?: number
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const Sort: React.FC<Props> = (props) => {
  return (
    <SortWrap
      data-testid="atoms-s-wrap"
      sort={props.sort}
      onClick={props.handleClick}
    >
      <ButtonWrap data-testid="atoms-s-button-wrap">
        <Icon.SortAsc size={8} color={Color.COMPONENT.FORM_BORDER} />
        <Icon.SortDesc size={8} color={Color.COMPONENT.FORM_BORDER} />
      </ButtonWrap>
      {props.children && (
        <Label data-testid="atoms-s-label">{props.children}</Label>
      )}
    </SortWrap>
  )
}

const SortWrap = styled.div<{ sort: number }>`
  display: flex;
  align-items: center;
  border-radius: 16px;
  user-select: none;
  cursor: pointer;
  white-space: nowrap;
  ${({ sort }) =>
    sort &&
    `
      > div {
        color: ${Color.TEXT.LINK};
        font-weight: bold;
      }
  `};
  ${({ sort }) =>
    sort == 1
      ? `
      > div > span:nth-child(1) > svg {
       fill: ${Color.TEXT.LINK};
      }
  `
      : sort == 2
      ? `
      > div > span:nth-child(2) > svg {
        fill: ${Color.TEXT.LINK};
      }
      `
      : ''};
`
const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    display: block;
  }
`
const Label = styled.div`
  display: inline-block;
  color: ${Color.TEXT.LIGHT_GRAY};
  font-size: 12px;
  margin-left: 8px;
`

export default Sort
