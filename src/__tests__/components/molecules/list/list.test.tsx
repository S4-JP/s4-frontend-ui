import React from 'react'
import { render, screen } from '@testing-library/react'
import { List, TextList, ListItem } from '../../../../index'

describe('リストのレンダリング確認', () => {
  test('props.className に指定したクラスが付与される。', () => {
    render(
      <List className="test">
        <ListItem />
      </List>
    )
    expect(screen.getByTestId('molecules-l-wrap')).toHaveClass('test')
  })

  test('リストのネストができる。', () => {
    render(
      <List className="test1">
        <List className="test2">
          <TextList />
        </List>
      </List>
    )

    expect(screen.queryAllByTestId('molecules-l-wrap')[0]).toHaveClass('test1')
    expect(screen.queryAllByTestId('molecules-l-wrap')[1]).toHaveClass('test2')
  })

  test('リストアイテムがdisabledの場合、半透過される。', () => {
    render(<ListItem disabled={true} />)
    expect(screen.getByTestId('molecules-li-wrap')).toHaveStyle('opacity: 0.5;')
  })

  test('リストアイテムにprops.handleClickが設定された場合、カーソルがポインタになる。', () => {
    const mockHandleClick = jest.fn()
    render(<ListItem handleClick={mockHandleClick} />)
    expect(screen.getByTestId('molecules-li-wrap')).toHaveStyle(
      'cursor: pointer;'
    )
  })

  test('リストアイテムにsize指定しない場合、heightがautoになる。', () => {
    render(<ListItem />)
    expect(screen.getByTestId('molecules-li-wrap')).toHaveStyle('height: auto;')
  })

  test('リストアイテムにsizeが指定された場合、heightが調整できる。', () => {
    render(<ListItem size={10} />)
    expect(screen.getByTestId('molecules-li-wrap')).toHaveStyle('height: 10px;')
  })
})
