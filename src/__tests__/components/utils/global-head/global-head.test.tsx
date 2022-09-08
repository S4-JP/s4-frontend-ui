import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { GlobalHead, GlobalStyle } from '../../../../index'

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>
    },
  }
})

describe('GlobalHeadのレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <GlobalHead>
        <GlobalStyle />
      </GlobalHead>
    )

    expect(getByTestId('utils-gh-title').textContent).toBe('S4')
  })
  test('props.titleを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(<GlobalHead title="test" />)

    expect(getByTestId('utils-gh-title').textContent).toBe('test | S4')
  })
})
