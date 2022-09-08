import { composeValidators, email } from '../../../../index'

const truthyValues = ['', 'check@example.com']

interface Datum {
  caseTitle: string
  expected: string
  value: string
}

const data: Datum[] = [
  {
    caseTitle: '入力が全角',
    expected: 'メールアドレスは半角で入力してください',
    value: 'あいうえお@examplecom',
  },
  {
    caseTitle: '入力が漢字',
    expected: 'メールアドレスは半角で入力してください',
    value: '漢字@examplecom',
  },
  {
    caseTitle: '入力が先頭半角スペース',
    expected: 'メールアドレスに正しい形式を指定してください',
    value: ' check@example',
  },
  {
    caseTitle: '入力が255文字以上',
    expected: 'メールアドレスは255文字以下で指定してください',
    value: `${'a'.repeat(255)}.com`, // 255文字
  },
  {
    caseTitle: '入力が連続ドット',
    expected: 'メールアドレスに正しい形式を指定してください',
    value: 'check..@example',
  },
  {
    caseTitle: '入力が先頭ドット',
    expected: 'メールアドレスに正しい形式を指定してください',
    value: '.check@example',
  },
  {
    caseTitle: '＠の直前ドット',
    expected: 'メールアドレスに正しい形式を指定してください',
    value: '.check@example',
  },
  {
    caseTitle: '入力が利用不可な記号',
    expected: 'メールアドレスに正しい形式を指定してください',
    value: 'check@example',
  },
  {
    caseTitle: '@前部分が65文字以上',
    expected: 'メールアドレスに正しい形式を指定してください',
    value: `${'a'.repeat(65)}@example`, // 65文字
  },
]

describe.each(data)('email - 不正なメールアドレスの時', (datum: Datum) => {
  test(`${datum.caseTitle}の場合。`, () => {
    expect(composeValidators(email)(datum.value)).toBe(datum.expected)
  })
})

describe.each(truthyValues)('email - 正しいメールアドレスの時', (v) => {
  test(`value: ${v} の時、undefined が返る。`, () => {
    expect(composeValidators(email)(v)).toBe(undefined)
  })
})
