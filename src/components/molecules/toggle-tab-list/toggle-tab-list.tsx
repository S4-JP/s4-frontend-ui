import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

const ToggleTabList: React.FC<Props> = (props) => {
  return <Wrap data-testid="molecules-ttl-wrap">{props.children}</Wrap>
}

const Wrap = styled.div`
  display: flex;
  align-items: center;

  > * {
    &:first-of-type {
      span {
        border-radius: 8px 0 0 8px;
      }
    }

    &:last-of-type {
      span {
        border-radius: 0 8px 8px 0;
      }
    }
  }
`

export default ToggleTabList
