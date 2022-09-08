import React from 'react'
import { render, screen } from '@testing-library/react'
import { InputText, Icon, Color } from '../../../../index'

describe('form - InputText のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    render(<InputText />)

    expect(screen.getByTestId('atoms-f-input-text-wrap')).toBeInTheDocument()
    expect(screen.getByTestId('atoms-f-input-text-wrap')).toHaveStyle(
      'width: 80px'
    )
    expect(
      screen.getByTestId('atoms-f-input-text-input-wrap')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('atoms-f-input-text-styled-input')
    ).toBeInTheDocument()
    expect(screen.getByTestId('atoms-f-input-text-styled-input')).toHaveStyle(
      'padding: 16px'
    )
  })

  test('オプションコンポーネントを設定した場合、コンポーネントがレンダリングされる。', () => {
    render(
      <InputText
        icon={<Icon.Cation color={Color.TEXT.GRAY} />}
        invalidMessage="test invalidMessage"
      />
    )

    expect(
      screen.getByTestId('atoms-f-input-text-icon-wrap')
    ).toBeInTheDocument()
    expect(screen.getByTestId('atoms-icon-svg-caption')).toBeInTheDocument()
    expect(
      screen.getByTestId('atoms-f-input-text-icon-error-wrap')
    ).toBeInTheDocument()

    expect(
      screen.getByTestId('atoms-f-input-text-invalid-message')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('atoms-f-input-text-invalid-message').textContent
    ).toBe('test invalidMessage')
    expect(screen.getByTestId('atoms-f-input-text-styled-input')).toHaveStyle(
      `padding-right: 40px;border: 2px solid ${Color.COMPONENT.DANGER};`
    )

    // icon(padding-left 40px) + isInvalid(padding-right 40px)
    expect(screen.getByTestId('atoms-f-input-text-styled-input')).toHaveStyle(
      'padding: 16px 40px 16px 40px;'
    )
  })
})

type Value = {
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL'
  expect: string
}
const values: Value[] = [
  { size: 'S', expect: '80px' },
  { size: 'M', expect: '104px' },
  { size: 'L', expect: '240px' },
  { size: 'XL', expect: '320px' },
  { size: 'XXL', expect: '480px' },
]

describe.each(values)(
  'forms - input-text - size のバリエーション',
  (v: Value) => {
    test(`size: ${v.size}」の時、width: ${v.expect}」でレンダリングされる。`, () => {
      render(<InputText size={v.size} />)

      expect(screen.getByTestId('atoms-f-input-text-wrap')).toHaveStyle(
        `width: ${v.expect};`
      )
    })
  }
)
