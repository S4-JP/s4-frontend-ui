import { composeValidators, notOnlySpace } from '../../../../index'

const falsyValues: string[] = [' ', '　', '  ', '　　', ' 　 ']
const truthyValues: string[] = [
  '',
  '0',
  'a',
  'a123',
  ' a123',
  'a123 ',
  ' a123 ',
  '　a123　',
  '　a1 23　',
]

describe.each(falsyValues)(
  'notOnlySpace - value が 半角空白、もしくは全角空白のみの時',
  (v: string) => {
    test(`値が「${'' + v}」の時、エラーメッセージが返る。`, () => {
      expect(composeValidators(notOnlySpace)(v)).toBe(
        'スペース文字のみでは、入力できません'
      )
    })
  }
)

describe.each(truthyValues)(
  'notOnlySpace - value が  半角空白、もしくは全角空白のみ以外の時',
  (v: string) => {
    test(`値が「${'' + v}」の時、undefined が返る。`, () => {
      expect(composeValidators(notOnlySpace)(v)).toBe(undefined)
    })
  }
)
