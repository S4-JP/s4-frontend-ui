import React from 'react'
import { render } from '@testing-library/react'
import { LoadingIcon } from '../../../../index'

describe('LoadingIconのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    const { getByTestId } = render(<LoadingIcon />)

    expect(getByTestId('atoms-li-wrap')).toMatchSnapshot()
  })
})
