# Stateが影響するコンポーネントのテスト
context-providerで GlobalContextProviderとProvideAuthProviderをレンダリングするrenderを用意しているのでそちらを使うとuseContextやuseAuthなどのコンテキストを使ったテストができる。

```tsx
import LoginForm from '@components/morecules/login-form'
import { render } from '../../../../__utils__/context-provider'

describe('ログインフォームの初期状態・属性確認', () => {
  test('LoginForm - 初期状態', () => {
    //__utils__/context-providerのカスタムレンダラを使用すると
    //コンポーネント内でuseContextなどを使用したStateも正常に動作する
    render(<LoginForm />)

　　 //テスト用のコンポーネントはフックしやすいようにdata-testidを付与する
    //screen.debug(screen.getByTestId('login-form'))
    expect(screen.getByTestId('login-form')).toHaveAttribute(
      'autocomplete',
      'off'
    )

    expect(screen.getByLabelText('Login ID')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Login ID')).toHaveAttribute('name', 'loginId')

    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'type',
      'password'
    )
    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'name',
      'password'
    )
  })
})
```
_utils__/context-provider.tsx
```tsx
import React, { useReducer } from 'react'
import { render } from '@testing-library/react'
import { initialUserState, userState } from '@store/interfaces'
import { globalStateReducer } from '@store/reducer'
import Context from '@store/context'
import { ProvideAuth } from '@hooks/use-auth'

const Renderer: React.FC = ({
  children,
}: React.PropsWithChildren<Record<string, any>>) => {
  const initialState: userState = initialUserState
  const [state, dispatch] = useReducer(globalStateReducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <ProvideAuth>{children}</ProvideAuth>
    </Context.Provider>
  )
}
const contextProvider = (ui, options = {}) =>
  render(ui, {
    wrapper: Renderer,
    ...options,
  })

export * from '@testing-library/react'
export { contextProvider as render }
```

[戻る](../readme.md)