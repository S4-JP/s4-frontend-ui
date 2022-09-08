import React from 'react'
import { storiesOf } from '@storybook/react'
import Color from '../../../const/color'
import { Supplement } from '../supplement'
import GlobalStyle from '../../utils/global-style'
import styled from 'styled-components'

storiesOf('Components/Atoms/Supplement', module).add('Supplement', () => (
  <Wrap>
    <GlobalStyle />
    <FieldGroup>
      <FieldGroupTitle>Supplement</FieldGroupTitle>
      <Field>
        <Supplement text={'※ 補足情報が入ります'} />
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
const FieldTitle = styled.p`
  min-width: 150px;
  font-size: 12px;
  font-weight: 500;
`
