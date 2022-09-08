import React from 'react'
import { render } from '@testing-library/react'
import { NewArrival } from '../../../../index'

/**
 * type Props = {
 *   number?: number
 *   omit?: boolean
 *   small?: boolean
 * }
 */
describe('new-arrival のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<NewArrival />)

    expect(getByTestId('atoms-na-wrap')).toMatchSnapshot()

    expect(getByTestId('atoms-na-wrap')).toHaveStyle(
      'width: 24px; height: 24px; font-size: 14px;'
    )
  })

  test('small=trueを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(<NewArrival small={true} />)

    expect(getByTestId('atoms-na-wrap')).toHaveStyle(
      'width: 20px; height: 20px; font-size: 12px;'
    )
  })

  test('omit=trueを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(<NewArrival small={true} omit={true} />)

    expect(getByTestId('atoms-na-wrap')).toHaveStyle(
      '  width: 16px; height: 16px; border-radius: 8px;'
    )
  })
})
