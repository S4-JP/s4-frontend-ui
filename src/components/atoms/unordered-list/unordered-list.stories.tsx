import React from 'react'
import { storiesOf } from '@storybook/react'
import Color from '../../../const/color'
import GlobalStyle from '../../utils/global-style'
import styled from 'styled-components'
import UnorderedList from '../unordered-list/unordered-list'

storiesOf('Components/Atoms/Supplement', module).add('UnorderedList', () => (
  <Wrap>
    <GlobalStyle />
    <FieldGroup>
      <FieldGroupTitle>UnorderedList</FieldGroupTitle>
      <Field>
        <UnorderedList>ここに文章が入ります</UnorderedList>
      </Field>
    </FieldGroup>
  </Wrap>
))

const Wrap = styled.div``
const FieldGroup = styled.div`
  margin-bottom: 32px;
`
const FieldGroupTitle = styled.div`
  margin-bottom: 16px;
  padding: 8px;
  border-bottom: 1px solid ${Color.COMPONENT.FORM_BORDER};
  font-size: 16px;
  font-weight: 600;
`
const Field = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 16px 16px;
`
