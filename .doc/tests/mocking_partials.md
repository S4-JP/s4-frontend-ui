# 部分的なモック

foo-bar-baz.ts
```ts
export const foo = 'foo'
export const bar = () => 'bar'
export default () => 'baz'
```

foo-bar-baz.test.ts
```ts
import defaultExport, {bar, foo} from '../foo-bar-baz'

jest.mock('../foo-bar-baz', () => {
  const originalModule = jest.requireActual('../foo-bar-baz')

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

test('should do a partial mock', () => {
  const defaultExportResult = defaultExport()
  expect(defaultExportResult).toBe('mocked baz')
  expect(defaultExport).toHaveBeenCalled()

  expect(foo).toBe('mocked foo')
  expect(bar()).toBe('bar')
})
```

[戻る](../readme.md)