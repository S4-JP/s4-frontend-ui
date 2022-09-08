import React from 'react'
import { render } from '@testing-library/react'
import { Supplement } from '../../../../index'

describe('Supplementのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    const { getByTestId } = render(<Supplement text="test" />)

    expect(getByTestId('atoms-sup-text')).toMatchSnapshot()
  })
})
