import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Color from '../../../const/color'
import GlobalStyle from '../../utils/global-style'
import LoginForm from '../login-form'

storiesOf('Components/Molecules/LoginForm', module).add('LoginForm', () => (
  <Wrap>
    <GlobalStyle />
    <FieldGroup>
      <Field>
        <LoginForm
          loginGoogleEnable={false}
          loginMsEnable={false}
          loginOktaEnable={false}
          loginOkta={true}
          handleLoginGoogle={() => console.log('handleLoginGoogle')}
          handleLoginMicrosoft={() => console.log('handleLoginMicrosoft')}
          handleLoginOkta={() => console.log('handleLoginOkta')}
          loginTitle="ログイン"
          loginWithLabelGoogle="Google アカウントでログイン"
          loginWithLabelMicrosoft="Microsoft アカウントでサインイン"
          loginWithLabelOkta="Okta アカウントでサインイン"
          submittingText="ログインしています..."
        />
      </Field>
    </FieldGroup>
  </Wrap>
))

const Wrap = styled.div``
const FieldGroup = styled.div`
  margin-bottom: 32px;
`

const Field = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 16px 16px;
`
