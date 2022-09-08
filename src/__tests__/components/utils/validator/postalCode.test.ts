import { composeValidators, postalCode } from '../../../../index'

const falsyValues = [
  '012345',
  '01234568',
  '012345a',
  '012345A',
  '０１２３４５６',
]
const truthyValues = ['', '0123456']

describe.each(falsyValues)('postalCode - 半角数字7文字以外', (v) => {
  test(`value: ${v} の時、設定したエラーメッセージが返る。`, () => {
    expect(composeValidators(postalCode)(v)).toBe(
      '半角数字7桁で入力してください'
    )
  })
})

describe.each(truthyValues)('postalCode - 半角数字7文字の時', (v) => {
  test(`value: ${v} の時、undefined が返る。`, () => {
    expect(composeValidators(postalCode)(v)).toBe(undefined)
  })
})
