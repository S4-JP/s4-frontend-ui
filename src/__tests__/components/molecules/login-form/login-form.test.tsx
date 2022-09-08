import React from 'react'
import { fireEvent, screen, waitFor, act, render } from '@testing-library/react'
import { LoginForm } from '../../../../index'

describe('ログインフォームのレンダリング確認', () => {
  test('okta: false時、Google と マイクロソフト のみ表示され、okta は表示されない。', () => {
    render(
      <LoginForm
        loginGoogleEnable={false}
        loginMsEnable={false}
        loginOktaEnable={false}
        loginOkta={false}
        handleLoginGoogle={() => console.log('handleLoginGoogle')}
        handleLoginMicrosoft={() => console.log('handleLoginMicrosoft')}
        handleLoginOkta={() => console.log('handleLoginOkta')}
        loginTitle="ログイン"
        loginWithLabelGoogle="Google アカウントでログイン"
        loginWithLabelMicrosoft="Microsoft アカウントでサインイン"
        loginWithLabelOkta="Okta アカウントでサインイン"
        submittingText="ログインしています..."
      />
    )

    expect(screen.getByTestId('molecules-lf-ggl-button')).toBeInTheDocument()
    expect(screen.getByTestId('molecules-lf-ms-button')).toBeInTheDocument()
    //存在しないこと
    expect(
      screen.queryByTestId('molecules-lf-okt-button')
    ).not.toBeInTheDocument()
  })

  test('okta: true 時、Google と マイクロソフト と okta が表示される。', () => {
    render(
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
    )

    expect(screen.getByTestId('molecules-lf-ggl-button')).toBeInTheDocument()
    expect(screen.getByTestId('molecules-lf-ms-button')).toBeInTheDocument()
    expect(screen.getByTestId('molecules-lf-okt-button')).toBeInTheDocument()

    expect(screen.getByTestId('molecules-lf-ggl-button')).toHaveTextContent(
      'Google アカウントでログイン'
    )
    expect(screen.getByTestId('molecules-lf-ms-button')).toHaveTextContent(
      'Microsoft アカウントでサインイン'
    )
    expect(screen.getByTestId('molecules-lf-okt-button')).toHaveTextContent(
      'Okta アカウントでサインイン'
    )
  })
})

describe('ログインボタン押下時の挙動チェック', () => {
  test('各ログインボタン押下時、ログイン中のメッセージになる。', async () => {
    render(
      <LoginForm
        loginGoogleEnable={true}
        loginMsEnable={true}
        loginOktaEnable={true}
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
    )
    expect(screen.getByTestId('molecules-lf-ggl-button')).toHaveTextContent(
      'ログインしています...'
    )
    expect(screen.getByTestId('molecules-lf-ms-button')).toHaveTextContent(
      'ログインしています...'
    )
    expect(screen.getByTestId('molecules-lf-okt-button')).toHaveTextContent(
      'ログインしています...'
    )
  })
})
