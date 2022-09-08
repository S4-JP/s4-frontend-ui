import React from 'react'
import { storiesOf } from '@storybook/react'
import { NewArrival } from '../new-arrival/'
import GlobalStyle from '../../utils/global-style'
import styled from 'styled-components'

storiesOf('Components/Atoms/NewArrival', module)
  .add('Default', () => (
    <Wrap>
      <GlobalStyle />
      <NewArrival omit={false} small={false} number={3} />
    </Wrap>
  ))
  .add('Small', () => (
    <Wrap>
      <GlobalStyle />
      <NewArrival omit={false} small={true} number={3} />
    </Wrap>
  ))
  .add('Omit', () => (
    <Wrap>
      <GlobalStyle />
      <NewArrival omit={true} />
    </Wrap>
  ))

const Wrap = styled.div``
