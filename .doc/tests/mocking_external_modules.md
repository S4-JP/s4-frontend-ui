# 外部モジュールのモック

コンポーネントの実装で外部モジュールをインポートしている場合、戻り値を加工すると依存を切り離したテストができる。
```ts
import { useRouter } from 'next/router'

// router.pathname と router.push をモック化
const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/login',
      push: mockPush,
    }
  },
}))

test('router.push が引数 /dashboard で呼び出されたことを確認', () => {
  expect(mockPush).toHaveBeenCalledWith('/dashboard')
})
```

## 全てをモック化することも可能
```ts
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      basePath: '/',
      isLocaleDomain: true,
      isReady: true,
      push: jest.fn(),
      prefetch: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isPreview: false,
    };
  },
}));
```

[戻る](../readme.md)