import React from 'react'
import { storiesOf } from '@storybook/react'
import Color from '../../../const/color'
import FormField from '../form-field'
import FormFieldMask from '../form-field-mask'
import { InputText } from '../../atoms/form'
import GlobalStyle from '../../utils//global-style'
import styled from 'styled-components'

storiesOf('Components/Molecules/FormFieldMask', module).add(
  'FormFieldMask',
  () => (
    <Wrap>
      <GlobalStyle />
      <FieldGroup>
        <Field>
          <FormFieldMask value={'ラベル'} isShow={false}>
            <FormField label={'ラベル'}>
              <InputText size={'L'} />
            </FormField>
          </FormFieldMask>
        </Field>
      </FieldGroup>
    </Wrap>
  )
)

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
