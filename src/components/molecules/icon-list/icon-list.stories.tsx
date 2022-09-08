import React from 'react'
import { storiesOf } from '@storybook/react'
import { IconList } from '../icon-list/index'
import GlobalStyle from '../../utils//global-style'
import { Icon } from '../../atoms/icon/'
import Color from '../../../const/color'
import styled from 'styled-components'

storiesOf('Components/Molecules/IconList', module)
  .add('Allow', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Props: deny</FieldGroupTitle>
        <Field>
          <FieldTitle>deny = false</FieldTitle>
          <GlobalStyle />
          <IconList
            text={'sample@example.com'}
            icon={<Icon.CircleCheck size={'16'} color={Color.ICON.ALLOW} />}
            deny={false}
            edit={true}
            delete={true}
          />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('Deny', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Props: deny</FieldGroupTitle>
        <Field>
          <FieldTitle>deny = true</FieldTitle>
          <GlobalStyle />
          <IconList
            text={'sample@example.com'}
            icon={<Icon.CircleCross size={'16'} color={Color.ICON.DENY} />}
            deny={true}
            edit={true}
            delete={true}
          />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('NoIcon', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Props: deny</FieldGroupTitle>
        <Field>
          <FieldTitle>no Icon</FieldTitle>
          <GlobalStyle />
          <IconList
            text={'sample@example.com'}
            icon={''}
            deny={true}
            edit={true}
            delete={true}
          />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('NoEditIcon', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Props: deny</FieldGroupTitle>
        <Field>
          <FieldTitle>no Edit Icon</FieldTitle>
          <GlobalStyle />
          <IconList
            text={'sample@example.com'}
            icon={''}
            deny={true}
            edit={false}
            delete={true}
          />
        </Field>
      </FieldGroup>
    </Wrap>
  ))
  .add('NoAllIcon', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>Props: deny</FieldGroupTitle>
        <Field>
          <FieldTitle>no All Icon</FieldTitle>
          <GlobalStyle />
          <IconList
            text={'sample@example.com'}
            icon={''}
            deny={true}
            edit={false}
            delete={false}
          />
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
