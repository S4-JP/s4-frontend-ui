import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ProfileImage } from '../../../../index'

const mockHandleClick = jest.fn()

describe('プロフィールイメージのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(<ProfileImage src="test" handleClick={mockHandleClick} />)

    expect(screen.getByTestId('molecules-pi-img')).toHaveAttribute(
      'src',
      'data:image/png;base64,test'
    )

    expect(screen.getByTestId('molecules-pi-hover-image')).toHaveStyle(
      'opacity: 0'
    )
    fireEvent.mouseOver(screen.getByTestId('molecules-pi-hover-image'))
    expect(screen.getByTestId('molecules-pi-hover-image')).toHaveStyle(
      'opacity: 1'
    )
    fireEvent.mouseLeave(screen.getByTestId('molecules-pi-hover-image'))
    expect(screen.getByTestId('molecules-pi-hover-image')).toHaveStyle(
      'opacity: 0'
    )
  })

  test('propsにhandleClickを設定しない場合、カメラアイコンが表示されない。', () => {
    render(<ProfileImage src="test" />)

    expect(
      screen.queryByTestId('molecules-pi-hover-image')
    ).not.toBeInTheDocument()
  })
})
