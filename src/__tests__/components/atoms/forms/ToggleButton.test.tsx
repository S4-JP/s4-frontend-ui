import React from 'react'
import { render } from '@testing-library/react'
import { ToggleButton, Color, Icon } from '../../../../index'

/**
 * type Props = {
 *   checked?: boolean
 *   onChange?: (e: React.SyntheticEvent) => void
 *   id?: string
 *   value?: string
 *   name?: string
 *   isInvalid?: boolean
 *   handleClick?(e: React.MouseEvent<HTMLElement>): void
 * }
 */
describe('form - ToggleButton のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<ToggleButton />)

    expect(getByTestId('atoms-f-toggle-button-label')).toMatchSnapshot()
    expect(getByTestId('atoms-f-toggle-button-marker')).toHaveStyle(
      `background: ${Color.COMPONENT.TOGGLE};`
    )
    expect(getByTestId('atoms-f-toggle-button-on')).toHaveStyle(`opacity: 0;`)
    expect(getByTestId('atoms-f-toggle-button-off')).toHaveStyle(`opacity: 1;`)
  })

  test('checkedにtrueを設定した場合、Makerの背景色が設定される。', () => {
    const { getByTestId } = render(
      <ToggleButton
        checked={true}
        onChange={jest.fn()}
        handleClick={jest.fn()}
      />
    )

    expect(getByTestId('atoms-f-toggle-button-marker')).toHaveStyle(
      `background: ${Color.PRIMARY._500};`
    )
    expect(getByTestId('atoms-f-toggle-button-on')).toHaveStyle(`opacity: 1;`)
    expect(getByTestId('atoms-f-toggle-button-off')).toHaveStyle(`opacity: 0;`)
  })
})
