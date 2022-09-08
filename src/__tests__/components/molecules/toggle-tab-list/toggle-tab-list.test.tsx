import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { ToggleTabList } from '../../../../index'

const Dummy = () => <span>dummy</span>

describe('トグルタブリストのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(
      <ToggleTabList>
        <Dummy />
      </ToggleTabList>
    )

    expect(screen.getByTestId('molecules-ttl-wrap')).toMatchSnapshot()
  })
})
