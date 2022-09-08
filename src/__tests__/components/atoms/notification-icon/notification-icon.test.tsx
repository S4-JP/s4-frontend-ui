import React from 'react'
import { render } from '@testing-library/react'
import { NotificationIcon, Color } from '../../../../index'

describe('notification-icon のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<NotificationIcon number={10} />)

    expect(getByTestId('atoms-ni-wrap')).toMatchSnapshot()

    expect(getByTestId('atoms-ni-wrap')).toHaveStyle(
      `background-color: ${Color.COMPONENT.NOTICE};`
    )
    expect(getByTestId('atoms-ni-wrap').textContent).toBe('10')
  })

  test('bgColor=#000を設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <NotificationIcon number={10} bgColor="#000" />
    )

    expect(getByTestId('atoms-ni-wrap')).toHaveStyle('background-color: #000;')
  })

  test('omit=trueを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <NotificationIcon number={10} bgColor="#000" omit={true} />
    )

    expect(getByTestId('atoms-ni-wrap')).toHaveStyle(
      'width: 8px;height: 8px;margin: -12px -6px 0 0;'
    )
    expect(getByTestId('atoms-ni-wrap')).toHaveStyle(
      'width: 8px;height: 8px;margin: -12px -6px 0 0;'
    )
  })
})
