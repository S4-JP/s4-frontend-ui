import { composeValidators, greaterNumber } from '../../../../index'

const falsyValues = [
  { letter: 3, value: 'ab' },
  { letter: 2, value: 'a' },
]
const truthyValues = [
  { letter: 1, value: 'a' },
  { letter: 3, value: 'abc' },
  { letter: 3, value: 'abcd' },
  { letter: '', value: '' },
  { letter: 2, value: '' }, //入力全消し時
]

describe.each(falsyValues)(
  'greaterNumber - letterNumber より value の文字長が短い時',
  (v) => {
    test(`letterNumber:${v.letter} / value: ${v.value} の時、設定したエラーメッセージが返る。`, () => {
      expect(composeValidators(greaterNumber(v.letter))(v.value)).toBe(
        `${v.letter}文字以上で入力してください`
      )
    })
  }
)

describe.each(truthyValues)(
  'greaterNumber - letterNumber より value が大きい時',
  (v) => {
    test(`letterNumber:${v.letter} / value: ${v.value} の時、undefined が返る。`, () => {
      expect(composeValidators(greaterNumber(v.letter))(v.value)).toBe(
        undefined
      )
    })
  }
)
