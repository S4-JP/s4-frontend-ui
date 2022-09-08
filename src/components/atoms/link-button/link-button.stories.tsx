import React from 'react'
import { storiesOf } from '@storybook/react'
import GlobalStyle from '../../utils/global-style'
import { LinkButton } from '../link-button'
import styled from 'styled-components'
import Color from '../../../const/color'

storiesOf('Components/Atoms/LinkButton', module)
  .add('Default', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Default</FieldGroupTitle>
        <Field>
          <GlobalStyle />
          <LinkButton
            disabled={false}
            title={'NVD'}
            date={'2021/00/00'}
            href={'/'}
          />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('Disable', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Disable</FieldGroupTitle>
        <Field>
          <GlobalStyle />
          <LinkButton
            disabled={true}
            title={'NVD'}
            date={'2021/00/00'}
            href={'/'}
          />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('NoLink', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>NoLink</FieldGroupTitle>
        <Field>
          <GlobalStyle />
          <LinkButton disabled={false} title={'NVD'} date={'2021/00/00'} />
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
  display: block;
  flex-flow: column;
  margin: 0 0 16px 16px;
`
