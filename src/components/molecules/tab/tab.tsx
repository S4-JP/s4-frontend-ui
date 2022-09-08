import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  className?: string
}

const Tab: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="molecules-t-wrap" className={props.className}>
      <TabList data-testid="molecules-t-tab-list">{props.children}</TabList>
    </Wrap>
  )
}

const Wrap = styled.div``
const TabList = styled.ul`
  display: flex;
`

export default Tab
