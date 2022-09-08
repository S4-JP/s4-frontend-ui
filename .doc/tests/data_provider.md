# データプロバイダ
同じテストで境界値のテストなど入力値が変わるだけのものなどはテストケースをまとめるとよい
一つのテストに複数のケースを書くよりもどのケースで落ちているかがわかりやすい

``` ts
interface Datum {
  hoge: string,
}

const data: Datum[] = [
  {
    hoge: 'hoge'
  },
]

describe.each(data)('hogeのユニットテスト', (datum: Datum) => {
  const { hoge } = datum

  test(`${hoge}の場合。`, () => {
    // テストの実装
  })
})
```

## テスト例
alphabetic-and-numeric.ts
``` ts
export const alphabeticAndNumeric = (value: any) => {
  value = value || ''
  if (value === '') return undefined
  return value.match(/[0-9]+/) && value.match(/[a-zA-Z]+/)
    ? undefined
    : '半角英数字で入力してください'
}
```

alphabetic-and-numeric.test.ts
```ts
import { alphabeticAndNumeric } from './alphabetic-and-numeric.ts'

interface Datum {
  caseTitle: string,
  expected: any,
  value: string
}

const error = '半角英数字で入力してください'

const data: Datum[] = [
  {
    caseTitle: '入力がfalsy',
    expected: undefined,
    value: undefined
  },
  {
    caseTitle: '入力が数字のみ',
    expected: error,
    value: '01234'
  },
  {
    caseTitle: '入力が英小文字のみ',
    expected: error,
    value: 'abcde'
  },
  （略）
]

describe.each(data)('alphabeticAndNumericのユニットテスト', (datum: Datum) => {
  test(`${datum.caseTitle}の場合。`, () => {
    expect(alphabeticAndNumeric(datum.value)).toBe(datum.expected)
  })
})
```

[戻る](../readme.md)