import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { PopupSelect, PopupSelectItem } from '../../../../index'

const Dummy = () => <span>dummy</span>
const mockHandleClick = jest.fn()

describe('ポップアップセレクトのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(
      <PopupSelect isShow={true}>
        <Dummy />
      </PopupSelect>
    )

    expect(screen.getByTestId('molecules-ps-options')).toHaveStyle(
      'display: flex;'
    )
    expect(screen.getByTestId('molecules-ps-options')).toContainHTML(
      '<span>dummy</span>'
    )
  })

  test('props.isShowに false を設定した場合、CSSで hidden される。', () => {
    render(
      <PopupSelect isShow={false}>
        <Dummy />
      </PopupSelect>
    )

    expect(screen.getByTestId('molecules-ps-options')).toHaveStyle(
      'display: none;'
    )
  })
})

describe('ポップアップセレクトアイテムのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(<PopupSelectItem label="test" handleClick={mockHandleClick} />)

    expect(screen.getByTestId('molecules-psi-option-item').textContent).toBe(
      'test'
    )

    fireEvent.click(screen.getByTestId('molecules-psi-option-item'))
    expect(mockHandleClick).toBeCalledTimes(1)
  })
})
