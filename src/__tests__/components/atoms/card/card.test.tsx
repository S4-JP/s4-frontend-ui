import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card, CardInner, CardDashboard, Color } from '../../../../index'

describe('カードのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(
      <Card title="card test">
        <CardInner bgColor="#000" />
      </Card>
    )
    expect(screen.getByTestId('atoms-c-wrap')).toHaveAttribute(
      'title',
      'card test'
    )
    expect(screen.getByTestId('atoms-c-wrap')).toHaveAttribute(
      'title',
      'card test'
    )
    expect(screen.getByTestId('atoms-c-title')).toHaveTextContent('card test')
    expect(screen.getByTestId('atoms-ci-wrap')).toHaveStyle('background: #000;')
  })

  test('propsになにも設定しない場合、初期値でレンダリングされる。', () => {
    render(
      <Card>
        <CardInner />
      </Card>
    )

    expect(screen.getByTestId('atoms-c-wrap')).toHaveStyle('width: 100%;')
    expect(screen.getByTestId('atoms-c-wrap')).toHaveStyle('margin-bottom: 0;')
    expect(screen.queryByTestId('atoms-c-title')).not.toBeInTheDocument()
    expect(screen.getByTestId('atoms-ci-wrap')).toHaveStyle('background: #fff;')
  })
})

type Value = {
  size: number
  margin: number
  elevation: 'S' | 'M' | 'L' | 'XL' | 'XXL'
  shadow: string
}
const values: Value[] = [
  { size: 10, margin: 10, elevation: 'S', shadow: Color.ELEVATION.S },
  { size: 11, margin: 9, elevation: 'M', shadow: Color.ELEVATION.M },
  { size: 12, margin: 8, elevation: 'L', shadow: Color.ELEVATION.L },
  { size: 13, margin: 7, elevation: 'XL', shadow: Color.ELEVATION.XL },
  { size: 14, margin: 6, elevation: 'XXL', shadow: Color.ELEVATION.XXL },
]

describe.each(values)('card - propsのバリエーション', (v: Value) => {
  test(`size:「${v.size}」 / margin:「${v.margin}」/ elevation:「${v.elevation}」 の時、設定値でレンダリングされる。`, () => {
    render(
      <Card size={v.size} margin={v.margin} elevation={v.elevation}>
        <CardInner />
      </Card>
    )

    expect(screen.getByTestId('atoms-c-wrap')).toHaveStyle(
      `width: ${v.size}px;`
    )
    expect(screen.getByTestId('atoms-c-wrap')).toHaveStyle(
      `margin-bottom: ${v.margin}px;`
    )
    expect(screen.getByTestId('atoms-c-wrap')).toHaveStyle(
      `box-shadow: ${v.shadow};`
    )
  })
})

describe('カードダッシュボードのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(
      <CardDashboard title="card test">
        <CardInner bgColor="#000" />
      </CardDashboard>
    )
    expect(screen.getByTestId('atoms-cd-wrap')).toHaveAttribute(
      'title',
      'card test'
    )
    expect(screen.getByTestId('atoms-cd-wrap')).toHaveAttribute(
      'title',
      'card test'
    )
    expect(screen.getByTestId('atoms-cd-title')).toHaveTextContent('card test')
    expect(screen.getByTestId('atoms-ci-wrap')).toHaveStyle('background: #000;')
  })
})

describe.each(values)('card-dashboard - propsのバリエーション', (v: Value) => {
  test(`size:「${v.size}」 / margin:「${v.margin}」/ elevation:「${v.elevation}」 の時、設定値でレンダリングされる。`, () => {
    render(
      <CardDashboard size={v.size} margin={v.margin} elevation={v.elevation}>
        <CardInner />
      </CardDashboard>
    )

    expect(screen.getByTestId('atoms-cd-wrap')).toHaveStyle(
      `width: ${v.size}px;`
    )
    expect(screen.getByTestId('atoms-cd-wrap')).toHaveStyle(
      `margin-bottom: ${v.margin}px;`
    )
    expect(screen.getByTestId('atoms-cd-wrap')).toHaveStyle(
      `box-shadow: ${v.shadow};`
    )
  })
})
