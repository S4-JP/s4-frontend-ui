import React from 'react'
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const UnorderedList: React.FC<Props> = (props) => {
  return <Text data-testid="atoms-ul-text">{props.children}</Text>
}

const Text = styled.li`
  list-style-type: disc;
  font-size: 14px;
`

export default UnorderedList
