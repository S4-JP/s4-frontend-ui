import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Checkbox } from '../../../../index'

/**
 * type Props = {
 *   checked?: boolean
 *   onChange?: (e: React.SyntheticEvent) => void
 *   id?: string
 *   value?: string
 *   name?: string
 *   labelName: string
 *   isInvalid?: boolean
 *   small?: boolean
 * }
 */
describe('form - Checkbox のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<Checkbox labelName="test" />)

    expect(getByTestId('atoms-f-checkbox-label-name').textContent).toBe('test')
  })

  test('checked small を指定した場合、規定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <Checkbox
        labelName="test"
        checked={true}
        small={true}
        onChange={jest.fn()}
      />
    )

    expect(getByTestId('atoms-i-icon-wrap')).toHaveAttribute('size', '11')
  })

  test('checked small を指定した場合、規定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <Checkbox
        labelName="test"
        checked={true}
        small={false}
        onChange={jest.fn()}
      />
    )

    expect(getByTestId('atoms-i-icon-wrap')).toHaveAttribute('size', '16')
  })
})
