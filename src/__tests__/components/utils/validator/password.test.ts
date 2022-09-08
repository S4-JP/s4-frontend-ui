import { composeValidators, password } from '../../../../index'

const falsyValues = [
  'あ',
  'ａ',
  ' ',
  'a',
  'Ａ',
  'A',
  '0',
  '+',
  'a0',
  'A0',
  'aA0',
  'A0+',
  'aA0+あ',
]
const truthyValues = ['', 'aA0+', 'Passw0rd+']

describe.each(falsyValues)(
  'password - 半角英大文字・小文字・数字・記号をそれぞれ含まない場合',
  (v) => {
    test(`value:「${v}」の時、設定したエラーメッセージが返る。`, () => {
      expect(composeValidators(password)(v)).toBe(
        '半角英大文字・小文字・数字・記号をそれぞれ含む必要があります'
      )
    })
  }
)

describe.each(truthyValues)(
  'password - 半角英大文字・小文字・数字・記号をそれぞれ含む場合',
  (v) => {
    test(`value:「${v}」の時、undefined が返る。`, () => {
      expect(composeValidators(password)(v)).toBe(undefined)
    })
  }
)
