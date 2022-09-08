import React from 'react'
import { render } from '@testing-library/react'
import { ToggleTab } from '../../../../index'

/**
 * type Props = {
 *   label?: string
 *   checked?: boolean
 *   onChange?: (e: React.SyntheticEvent) => void
 * }
 */
describe('form - ToggleTab のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<ToggleTab />)

    expect(getByTestId('atoms-f-toggle-tab-label')).toMatchSnapshot()
  })
})
