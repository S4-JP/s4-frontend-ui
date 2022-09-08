import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  text: string
}

const Supplement: React.FC<Props> = (props) => {
  return <Text data-testid="atoms-sup-text">{props.text}</Text>
}

const Text = styled.p`
  margin-bottom: 4px;
  font-size: 12px;
  color: ${Color.TEXT.LIGHT_GRAY};

  &:last-of-type {
    margin: 0;
  }
`

export default Supplement
