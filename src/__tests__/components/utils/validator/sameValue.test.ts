import { composeValidators, sameValue } from '../../../../index'

const falsyValues = [
  { confirm: 'aa', value: 'ab' },
  { confirm: 'aa', value: 'ba' },
]
const truthyValues = [
  { confirm: 'aa', value: 'aa' },
  { confirm: '', value: '' },
  { confirm: 'aa', value: '' }, //入力全消し時
]

describe.each(falsyValues)(
  'sameValue - confirm と value の入力文字列が違う時',
  (v) => {
    test(`confirmNumber:${v.confirm} / value: ${v.value} の時、設定したエラーメッセージが返る。`, () => {
      expect(composeValidators(sameValue(v.confirm))(v.value)).toBe(
        'パスワードが一致しません'
      )
    })
  }
)

describe.each(truthyValues)(
  'sameValue - confirm と value の入力文字列が同じ時',
  (v) => {
    test(`confirmNumber:${v.confirm} / value: ${v.value} の時、undefined が返る。`, () => {
      expect(composeValidators(sameValue(v.confirm))(v.value)).toBe(undefined)
    })
  }
)
