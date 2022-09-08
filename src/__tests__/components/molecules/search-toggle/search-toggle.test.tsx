import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { SearchToggle } from '../../../../index'

const Dummy = () => <span>dummy</span>
const mockHandleClick = jest.fn()

/**
 *   height?: number
 *   form: React.ReactNode
 *   handleClick?(e: React.MouseEvent<HTMLElement>): void
 */

describe('サーチトグルのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(
      <SearchToggle
        height={100}
        handleClick={mockHandleClick}
        form={<Dummy />}
      />
    )

    expect(screen.getByTestId('atoms-sc-text').textContent).toBe('絞り込み検索')
    expect(screen.getByTestId('atoms-sc-input')).not.toHaveAttribute(
      'checked',
      ''
    )
    expect(screen.getByTestId('molecules-st-search-form')).not.toHaveAttribute(
      'height',
      100
    )
    expect(
      screen.getByTestId('atoms-icon-svg-chevron-down')
    ).toBeInTheDocument()
    expect(screen.getByTestId('molecules-st-search-form')).toHaveStyle(
      'opacity: 0;visibility: hidden;'
    )
  })

  test('クリック時、アイコンが chevron-up になりフォームが表示される。', () => {
    render(
      <SearchToggle
        height={100}
        handleClick={mockHandleClick}
        form={<Dummy />}
      />
    )

    fireEvent.click(screen.getByTestId('atoms-sc-input'))
    expect(screen.getByTestId('atoms-icon-svg-chevron-up')).toBeInTheDocument()
    expect(screen.getByTestId('molecules-st-search-form')).toHaveStyle(
      'visibility: visible;opacity: 1'
    )
  })
})
