import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { LinkBack } from '../../../../index'

const mockPush = jest.fn()
const mockBack = jest.fn()
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockPush,
      back: mockBack,
    }
  },
}))

describe('link-back のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<LinkBack label="test" />)

    expect(getByTestId('atoms-lb-wrap')).toMatchSnapshot()

    fireEvent.click(getByTestId('atoms-lb-wrap'))
    expect(mockBack).toBeCalledTimes(1)
  })
  test('props.linkを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(<LinkBack label="test" link="/test" />)

    fireEvent.click(getByTestId('atoms-lb-wrap'))
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toBeCalledWith('/test')
  })
})
