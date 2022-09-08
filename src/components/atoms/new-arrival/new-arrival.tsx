import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  number?: number
  omit?: boolean
  small?: boolean
}

const NewArrival: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="atoms-na-wrap" omit={props.omit} small={props.small}>
      {!props.omit && props.number}
    </Wrap>
  )
}
const Wrap = styled.div<{ omit?: boolean; small?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ small }) => (small ? '20px' : '24px')};
  height: ${({ small }) => (small ? '20px' : '24px')};
  border-radius: 12px;
  background-color: ${Color.COMPONENT.NOTICE};
  font-size: ${({ small }) => (small ? '12px' : '14px')};
  font-weight: 500;
  color: #fff;

  ${({ omit }) =>
    omit &&
    `
  width: 16px;
  height: 16px;
  border-radius: 8px;
  `}
`

export default NewArrival
