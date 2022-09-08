import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { LinkButton, Color } from '../../../../index'

/**
 * type Props = {
 *   href?: string
 *   title: string
 *   date?: string
 *   disabled?: boolean
 * }
 */
describe('link-button のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<LinkButton title="test" />)

    expect(getByTestId('atoms-lb-wrap')).toMatchSnapshot()
  })

  test('props.hrefを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(<LinkButton title="test" href="/test" />)
    expect(getByTestId('atoms-lb-wrap')).toHaveStyle(
      `background-color: ${Color.TEXT.GRAY};`
    )

    fireEvent.mouseOver(getByTestId('atoms-lb-wrap'))
    waitFor(() =>
      expect(getByTestId('atoms-lb-wrap')).toHaveStyle(
        `background: ${Color.COMPONENT.GRAY_HOVER};`
      )
    )
  })

  test('props.handleClick設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <LinkButton title="test" handleClick={jest.fn()} />
    )

    expect(getByTestId('atoms-lb-icon-wrapper')).toMatchSnapshot()
  })
})
