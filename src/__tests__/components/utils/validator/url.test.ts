import { composeValidators, url } from '../../../../index'

const falsyValues = [
  'ftp://example.com',
  'htp://example.com',
  'http//example.com',
  'http:/example.com',
  'http:/example. com',
  'http:/example."com',
]
const truthyValues = [
  '',
  'http://example',
  'http://example..com',
  'http://example.com',
  'https://example.com',
  'http://.example.com',
  'http://www.example.com',
  'http://www.example.com/path',
  'http://www.example.com/path+path',
  'http://www.example.com/~user',
  'http://www.example.com/&amp;',
  'http://正しいURL',
]

describe.each(falsyValues)('url - 不正なurlの時', (v) => {
  test(`value: ${v} の時、設定したエラーメッセージが返る。`, () => {
    expect(composeValidators(url)(v)).toBe('正しいURLを入力してください')
  })
})

describe.each(truthyValues)('url - 正しいurlの時', (v) => {
  test(`value: ${v} の時、undefined が返る。`, () => {
    expect(composeValidators(url)(v)).toBe(undefined)
  })
})
