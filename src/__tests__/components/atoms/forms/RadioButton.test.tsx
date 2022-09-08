import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { RadioButton, Color } from '../../../../index'

/**
 * type Props = {
 *   checked?: boolean
 *   onChange?: (e: React.SyntheticEvent) => void
 *   value?: string
 *   name?: string
 *   labelName: string
 *   small?: boolean
 * }
 */
describe('form - Checkbox のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<RadioButton labelName="test" />)

    expect(getByTestId('atoms-f-radio-label-name').textContent).toBe('test')
  })

  test('checked small を指定した場合、規定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <RadioButton
        labelName="test"
        checked={true}
        onChange={jest.fn()}
        small={true}
      />
    )

    expect(getByTestId('atoms-f-radio-marker')).toHaveStyle(
      `width: 16px;min-width: 16px;height: 16px;min-height: 16px;border: 2px solid ${Color.PRIMARY._500};`
    )
  })
})
