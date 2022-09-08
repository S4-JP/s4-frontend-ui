import React from 'react'
import { render } from '@testing-library/react'
import { UnorderedList } from '../../../../index'

const Dummy = () => <span>dummy</span>
describe('UnorderedListのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <UnorderedList>
        <Dummy />
      </UnorderedList>
    )

    expect(getByTestId('atoms-ul-text')).toMatchSnapshot()
  })
})
