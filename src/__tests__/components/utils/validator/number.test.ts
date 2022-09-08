import { composeValidators, number } from '../../../../index'

const falsyValues: string[] = ['a', '1a', '-100', '１', ' 1', 'true']
const truthyValues: string[] = ['0', '1', '123', '']

describe.each(falsyValues)(
  'number - value が 半角数字以外の時',
  (v: string) => {
    test(`値が「${'' + v}」の時、エラーメッセージが返る。`, () => {
      expect(composeValidators(number)(v)).toBe('半角数字で入力してください')
    })
  }
)

describe.each(truthyValues)(
  'number - value が 半角数字以外の時',
  (v: string) => {
    test(`値が「${'' + v}」の時、undefined が返る。`, () => {
      expect(composeValidators(number)(v)).toBe(undefined)
    })
  }
)
