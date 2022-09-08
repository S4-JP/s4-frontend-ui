import React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalStyle from '../../utils/global-style'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Sort } from '../sort'

storiesOf('Components/Atoms/Sort', module).add('Sort', () => (
  <Wrap>
    <GlobalStyle />
    <Sort>重要度</Sort>
  </Wrap>
))

const Wrap = styled.div``
