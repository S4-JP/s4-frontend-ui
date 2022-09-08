import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon'
import Color from '../../../const/color'

type Props = {
  label: string
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const LabelEmail: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="atoms-l-label-email-wrap">
      <TextWrap data-testid="atoms-l-label-email-text-wrap">
        {props.label}
      </TextWrap>
      <IconWrap
        data-testid="atoms-l-label-email-icon-wrap"
        onClick={props.handleClick}
      >
        <Icon.CircleCross size={16} color={Color.TEXT.GRAY} />
      </IconWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0 8px;
  height: 32px;
  border-radius: 8px;
  border: solid 1px #c6d6e3;
  background-color: #fff;
`
const TextWrap = styled.div`
  font-size: 12px;
`
const IconWrap = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  cursor: pointer;
  line-height: 1;
`

export default LabelEmail
