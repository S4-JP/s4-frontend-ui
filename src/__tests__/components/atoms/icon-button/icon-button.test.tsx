import React from 'react'
import { render } from '@testing-library/react'
import { IconButton, Color } from '../../../../index'

/**
 * type Props = {
 *   focus?: boolean
 *   children: React.ReactNode
 *   handleClick?(e: React.MouseEvent<HTMLElement>): void
 * }
 */
const Dummy = () => <span>dummy</span>
describe('IconButtonのレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <IconButton>
        <Dummy />
      </IconButton>
    )

    expect(getByTestId('atoms-ib-wrap')).toMatchSnapshot()
  })

  test('props.focus=trueに設定した時、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <IconButton focus={true}>
        <Dummy />
      </IconButton>
    )

    expect(getByTestId('atoms-ib-wrap')).toHaveStyle(
      `background-color: ${Color.PRIMARY._500};`
    )
  })
})
