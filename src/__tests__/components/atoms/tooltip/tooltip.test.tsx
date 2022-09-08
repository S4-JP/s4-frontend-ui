import React from 'react'
import { render } from '@testing-library/react'
import { Tooltip } from '../../../../index'

describe('Tooltipのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    const { getByTestId } = render(<Tooltip content="test" />)

    expect(getByTestId('atoms-tt-wrap')).toMatchSnapshot()
  })
})
