import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { PageHeader } from '../../../../index'

describe('ページヘッダのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(<PageHeader title="test title" description="test description" />)

    expect(screen.getByTestId('molecules-ph-title').textContent).toBe(
      'test title'
    )
    expect(screen.getByTestId('molecules-ph-description').textContent).toBe(
      'test description'
    )
  })

  test('props.descriptionを設定しない場合、レンダリングされない。', () => {
    render(<PageHeader title="test title" />)

    expect(screen.getByTestId('molecules-ph-title').textContent).toBe(
      'test title'
    )
    expect(
      screen.queryByTestId('molecules-ph-description')
    ).not.toBeInTheDocument()
  })
})
