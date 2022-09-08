# Hooksのテスト（useState）
react-hooksの renderHook を使うことでコンポーネントなしでhooksのテストができる。

```ts
import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useProvideAuth } from '@hooks/use-auth'

// next/routerをmock化
jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/login',
    }
  },
}))

describe('useProvideAuth - tests', () => {
  it('useProvideAuth - init', async () => {
    const auth = renderHook(() => useProvideAuth()).result
    expect(auth.current.user).toBe(false)
  })
})
```

[戻る](../readme.md)