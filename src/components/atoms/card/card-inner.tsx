import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  bgColor?: string
}

const CardInner: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="atoms-ci-wrap" bgColor={props.bgColor}>
      {props.children}
    </Wrap>
  )
}

const Wrap = styled.div<{ bgColor?: string }>`
  margin-top: 24px;
  padding: 16px 24px;
  border-radius: 8px;
  background: ${({ bgColor }) => (bgColor ? bgColor : '#fff')};
`

export default CardInner
