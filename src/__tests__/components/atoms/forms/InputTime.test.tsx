import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { InputTime, Color, Time } from '../../../../index'

describe('form - InputTime のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', async () => {
    render(<InputTime />)

    expect(screen.getByTestId('atoms-f-input-time-wrap')).toMatchSnapshot()

    expect(screen.getByTestId('atoms-f-input-time-options')).toHaveStyle(
      'display: none;'
    )
    // position 設定なしの場合 false
    expect(screen.getByTestId('atoms-f-input-time-options')).toHaveStyle(
      'top: 50px;'
    )

    fireEvent.click(screen.getByTestId('atoms-ib-wrap'))
    fireEvent.focus(screen.getByTestId('atoms-f-input-text-styled-input'))

    await waitFor(() =>
      expect(screen.getByTestId('atoms-f-input-time-options')).toHaveStyle(
        'display: flex;'
      )
    )

    fireEvent.click(screen.getByTestId('atoms-f-input-time-option-item-0'))
    await waitFor(() =>
      expect(screen.getByTestId('atoms-f-input-time-options')).toHaveStyle(
        'display: none;'
      )
    )
  })

  test('props.selectedTimeを設定した場合、該当アイテムの背景色を変更してレンダリングされる。', () => {
    render(<InputTime selectedTime={Time[0]} />)

    expect(screen.getByTestId('atoms-f-input-time-option-item-0')).toHaveStyle(
      `background: ${Color.COMPONENT.WHITE_HOVER}`
    )
    expect(screen.getByTestId('atoms-f-input-time-option-item-1')).toHaveStyle(
      `background: ${Color.COMPONENT.SURFACE}`
    )
  })

  test('props.position に false を設定した場合、optionsにCSSを設定する', () => {
    render(<InputTime position={false} />)

    expect(screen.getByTestId('atoms-f-input-time-options')).toHaveStyle(
      'top: 50px;'
    )
  })

  test('props.position に true を設定した場合、optionsにCSSを設定する', () => {
    render(<InputTime position={true} />)

    expect(screen.getByTestId('atoms-f-input-time-options')).toHaveStyle(
      'bottom: 50px;'
    )
  })
})
