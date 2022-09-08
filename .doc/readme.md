# テストTips

## 目次
- [React Component テストを書くための考え方](tests/about_testing.md)
- [実装時のポイント](tests/immprements_point.md)
- [data provider](tests/data_provider.md)
- [外部モジュールのモック](tests/mocking_external_modules.md)
- [独自モジュールのモック](tests/mocking_my_modules.md)
- [部分的なモック](tests/mocking_partials.md)
- [コンポーネントのレンダリングを伴うテスト](tests/testing_compornents.md)
- [Hooksのテスト（useState）](tests/testing_hooks.md)
- [Stateが影響するコンポーネントのテスト](tests/testing_context_provider.md)
- [ユーザ操作によるコンポーネント属性の変化をテストする](tests/testing_user_event.md)

## Jest（テストフレームワーク）に関して

JavaScriptのテストフレームワークでは、Jestを使う事が推奨されています。
Jestは、テストファイルでそれぞれのメソッドとオブジェクトをグローバル環境に配置します。
s4-webfront-reactプロジェクトにもJestが含まれています。

## テストコードサンプル

sum.ts
```ts
export const sum = (a: number, b: number) => a + b
```

sum.test.ts
```ts
import { sum } from './sum'

test('add 1, 2 to 3', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, 3)).not.toBe(3)
})
```

console
```shell
 PASS  src/__tests__/sum.test.ts
  ✓ add 1, 2 to 3 (7 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.814 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.
```