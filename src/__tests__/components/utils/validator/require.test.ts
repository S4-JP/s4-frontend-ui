import { composeValidators, required } from '../../../../index'

type Falsy = boolean | null | undefined | number | string
type Truthy = boolean | object | [] | string | number
const FalsyValues: Falsy[] = [false, 0, -0, '', null, undefined, NaN]
const TruthyValues: Truthy[] = [
  true,
  {},
  [],
  42,
  '0',
  'false',
  new Date(),
  -42,
  3.14,
  -3.14,
  Infinity,
  -Infinity,
]

describe.each(FalsyValues)(
  "required - value が falsy（false, 0, -0, '', null, undefined, NaN）の時",
  (v: Falsy) => {
    test(`値が${'' + v}の時、設定したエラーメッセージが返る。`, () => {
      expect(composeValidators(required('値が未入力です'))(v)).toBe(
        '値が未入力です'
      )
    })
  }
)

describe.each(TruthyValues)(
  'required - value が truthy（true, {}, [](空の配列), number, object )の時',
  (v: Truthy) => {
    test(`値が${'' + v}の時、undefined が返る。`, () => {
      expect(composeValidators(required('値が未入力です'))(v)).toBe(undefined)
    })
  }
)
