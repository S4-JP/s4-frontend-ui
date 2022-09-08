import React from 'react'
import { render } from '@testing-library/react'
import {
  SearchCheckboxGroup,
  SearchCheckbox,
  Color,
  Icon,
} from '../../../../index'

/**
 * type Props = {
 *   name: string
 *   value: string | number
 *   color?: string
 *   icon?: React.ReactNode
 *   children?: React.ReactNode
 *   checked?: boolean
 *   statusValue?: number
 *   onChange?(e: React.ChangeEvent<HTMLInputElement>): void
 *   handleClick?(e: React.MouseEvent<HTMLElement>): void
 * }
 */
describe('SearchCheckbox のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <SearchCheckboxGroup>
        <SearchCheckbox value={1} name="test" />
      </SearchCheckboxGroup>
    )
    expect(getByTestId('atoms-scg-wrap')).toMatchSnapshot()
    expect(getByTestId('atoms-sc-input')).toHaveAttribute('name', 'test')
    expect(getByTestId('atoms-sc-input')).toHaveAttribute('value', '1')
  })

  test('props.colorを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <SearchCheckbox value={1} color="#000" name="test" />
    )

    expect(getByTestId('atoms-sc-urgency-bar')).toHaveStyle('background: #000')
  })

  test('props.iconを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <SearchCheckbox
        value={1}
        icon={<Icon.Cation color={Color.TEXT.GRAY} />}
        name="test"
      />
    )

    expect(getByTestId('atoms-icon-svg-caption')).toBeInTheDocument()
  })
})

type Value = {
  value: number
  expect: string
}
const values: Value[] = [
  { value: 1, expect: 'atoms-icon-svg-status-backlog' },
  { value: 2, expect: 'atoms-icon-svg-status-progress' },
  { value: 3, expect: 'atoms-icon-svg-status-closed' },
  { value: 9, expect: 'atoms-icon-svg-status-done' },
]

describe.each(values)('LabelIcon - labelを設定した場合', (v) => {
  test(`value:「${v.value}」の時、設定したアイコン「${v.expect}」が表示される。`, () => {
    const { getByTestId } = render(
      <SearchCheckbox value={v.value} name="test" statusValue={v.value} />
    )
    expect(getByTestId(v.expect)).toBeInTheDocument()
  })
})
