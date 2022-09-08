import { composeValidators, time } from '../../../../index'

const falsyValues = ['1:00', '24:00', '01:1', '01:0', '01:60']
const truthyValues = ['', '01:23']

describe.each(falsyValues)('time - 不正な時間の時', (v) => {
  test(`value: ${v} の時、設定したエラーメッセージが返る。`, () => {
    expect(composeValidators(time)(v)).toBe('正しい時間を入力してください')
  })
})

describe.each(truthyValues)('time - 正しい時間の時', (v) => {
  test(`value: ${v} の時、undefined が返る。`, () => {
    expect(composeValidators(time)(v)).toBe(undefined)
  })
})
