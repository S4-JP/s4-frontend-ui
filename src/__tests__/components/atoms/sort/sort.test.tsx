import React from 'react'
import { render } from '@testing-library/react'
import { Sort, Color } from '../../../../index'

/**
 *   children?: string
 *   focus?: boolean
 *   sort?: number
 *   handleClick?(e: React.MouseEvent<HTMLElement>): void
 */
describe('Sort のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<Sort />)
    expect(getByTestId('atoms-s-wrap')).toMatchSnapshot()
  })

  test('childを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(<Sort>テスト</Sort>)
    expect(getByTestId('atoms-s-wrap')).toMatchSnapshot()
  })

  test('props.sort=1設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(<Sort sort={1} />)

    expect(getByTestId('atoms-icon-svg-sort-asc')).toHaveStyle(
      `fill: ${Color.TEXT.LINK};`
    )
  })
  test('props.sort=2設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(<Sort sort={2} />)

    expect(getByTestId('atoms-icon-svg-sort-desc')).toHaveStyle(
      `fill: ${Color.TEXT.LINK};`
    )
  })
})
