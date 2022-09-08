import { composeValidators, alphabeticAndNumeric } from '../../../../index'

const falsyValues = ['+', 'あ', 'ａ', 'a', 'A', '1']
const truthyValues = ['', 'a1']

describe.each(falsyValues)(
  'alphabeticAndNumeric - 半角大文字小文字数字以外',
  (v) => {
    test(`value: ${v} の時、設定したエラーメッセージが返る。`, () => {
      expect(composeValidators(alphabeticAndNumeric)(v)).toBe(
        '半角英数字で入力してください'
      )
    })
  }
)

describe.each(truthyValues)(
  'alphabeticAndNumeric - 半角大文字小文字数字の時',
  (v) => {
    test(`value: ${v} の時、undefined が返る。`, () => {
      expect(composeValidators(alphabeticAndNumeric)(v)).toBe(undefined)
    })
  }
)
