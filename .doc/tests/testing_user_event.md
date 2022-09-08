# ユーザ操作によるコンポーネント属性の変化をテストする
```tsx
test('LoginForm - パスワードの表示・非表示切り替え', async () => {
    //カスタムレンダラを使用してコンポーネントをレンダリングする
    render(<LoginForm />)

    // 初期 type=password
    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'type',
      'password'
    )

    // type=text
    //パスワード表示・非表示ボタンをクリックし、レンダリング完了まで待つ
    await userEvent.click(screen.getByTestId('password-visibility-toggle'))
    //passwordのinput typeが password から text に代わっていることを確認する
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'text')

    // type=password
    //再度パスワード表示・非表示ボタンをクリックし、レンダリング完了まで待つ
    await userEvent.click(screen.getByTestId('password-visibility-toggle'))
    //passwordのinput typeが text から password に代わっていることを確認する
    expect(screen.getByLabelText('Password')).toHaveAttribute(
      'type',
      'password'
    )
  })
```


[戻る](../readme.md)