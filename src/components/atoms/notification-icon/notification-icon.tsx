import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  number: number
  bgColor?: string
  className?: string
  omit?: boolean
}

const NotificationIcon: React.FC<Props> = (props) => {
  return (
    <Wrap
      data-testid="atoms-ni-wrap"
      className={props.className}
      bgColor={props.bgColor}
      omit={props.omit}
    >
      {!props.omit && props.number}
    </Wrap>
  )
}

const Wrap = styled.div<{ bgColor?: string; omit?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : Color.COMPONENT.NOTICE};
  font-size: 14px;
  font-weight: 500;
  color: #fff;

  ${({ omit }) =>
    omit &&
    `
    width: 8px;
    height: 8px;
    margin: -12px -6px 0 0;
  `}
`

export default NotificationIcon
