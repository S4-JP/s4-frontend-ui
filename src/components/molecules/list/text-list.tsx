import React from 'react'
import styled from 'styled-components'

type Props = {
  children?: React.ReactNode
}

const TextList: React.FC<Props> = (props) => {
  return (
    <Text data-testid="molecules-tl-text" {...props}>
      {props.children}
    </Text>
  )
}

const Text = styled.li`
  margin: 0 8px 0 20px;
  list-style-type: disc;
  font-size: 14px;
`

export default TextList
