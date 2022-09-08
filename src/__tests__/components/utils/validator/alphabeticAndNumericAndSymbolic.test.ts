import {
  composeValidators,
  alphabeticAndNumericAndSymbolic,
} from '../../../../index'

const falsyValues = ['あ', 'ａ', ' ', 'a', 'Ａ', 'A', '0', '+', 'aA0+あ']
const truthyValues = ['', 'a+', 'A+', '0+', 'aA0+', 'login.test']

describe.each(falsyValues)(
  'alphabeticAndNumericAndSymbolic - 半角英数、最低記号１文字以外の入力の時',
  (v) => {
    test(`value:「${v}」の時、設定したエラーメッセージが返る。`, () => {
      expect(composeValidators(alphabeticAndNumericAndSymbolic)(v)).toBe(
        '半角英数および記号を含めて入力してください'
      )
    })
  }
)

describe.each(truthyValues)(
  'alphabeticAndNumericAndSymbolic - 半角英数、最低記号１文字の入力の時',
  (v) => {
    test(`value:「${v}」の時、undefined が返る。`, () => {
      expect(composeValidators(alphabeticAndNumericAndSymbolic)(v)).toBe(
        undefined
      )
    })
  }
)
