import React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalStyle from '../../utils//global-style'
import styled from 'styled-components'
import HistoryList from '../history-list/history-list'
import {
  sysHistoryItem,
  userHistoryItem,
} from '../../../__data__/moleclues/history-list-data'

storiesOf('Components/Molecules/HistoryList', module).add('HistoryList', () => (
  <Wrap>
    <GlobalStyle />
    <HistoryList items={[sysHistoryItem, userHistoryItem]} />
  </Wrap>
))

const Wrap = styled.div``
