import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import { IconImage } from '../../../../index'

/**
 * type Props = {
 *   src: string
 *   size: number
 *   className?: string
 *   handleClick?(e: React.MouseEvent<HTMLElement>): void
 * }
 */
describe('IconImageのレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<IconImage src={'test'} size={12} />)

    expect(getByTestId('atoms-ii-wrap')).toHaveStyle(
      'width: 12px; height: 12px; border-radius: 6px;'
    )
    expect(getByTestId('atoms-ii-img')).toHaveStyle(
      'width: 12px; height: 12px;'
    )
    expect(getByTestId('atoms-ii-img')).toHaveAttribute(
      'src',
      'data:image/png;base64,test'
    )
  })

  test('props.sizeに0を設定した場合、規定値でレンダリングされる。', () => {
    const { getByTestId } = render(<IconImage src={'test'} size={0} />)

    expect(getByTestId('atoms-ii-wrap')).toHaveStyle(
      'width: 36px; height: 36px; border-radius: 18px;'
    )
    expect(getByTestId('atoms-ii-img')).toHaveStyle(
      'width: 36px; height: 36px;'
    )
  })

  test('props.onClickを設定した場合、hoverで透過される。', () => {
    const mockHandleClick = jest.fn()
    const { getByTestId } = render(
      <IconImage src={'test'} size={0} handleClick={mockHandleClick} />
    )

    fireEvent.mouseOver(getByTestId('atoms-ii-wrap'))
    waitFor(() =>
      expect(getByTestId('atoms-ii-wrap')).toHaveStyle('opacity: 0.5;')
    )
  })
})
