import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
  children: React.ReactNode
}

const List: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="molecules-l-wrap" className={props.className}>
      {props.children}
    </Wrap>
  )
}

const Wrap = styled.ul``

export default List
