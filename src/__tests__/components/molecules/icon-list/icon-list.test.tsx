import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { IconList, Color } from '../../../../index'

describe('アイコンリストの確認', () => {
  test('props.text=test の場合、textが test になる。', () => {
    render(<IconList text="test" deny={true} />)
    expect(screen.getByTestId('molecules-il-text').textContent).toBe('test')
  })

  test('props.deny=true の場合、背景色が Color.COMPONENT.DENY、文字色が Color.TEXT.BLACK になる。', () => {
    render(<IconList text="test" deny={true} />)
    expect(screen.getByTestId('molecules-il-wrap')).toHaveStyle(
      `background: ${Color.COMPONENT.DENY};color: ${Color.TEXT.BLACK};`
    )
  })

  test('props.deny=false の場合、背景色が Color.COMPONENT.ALLOW、文字色が Color.TEXT.BLACK になる。', () => {
    render(<IconList text="test" deny={false} />)
    expect(screen.getByTestId('molecules-il-wrap')).toHaveStyle(
      `background: ${Color.COMPONENT.ALLOW};color: ${Color.TEXT.BLACK};`
    )
  })

  test('props.edit=true の場合、props.handleClickEdit が呼ばれる。', () => {
    const mockHandleClickEdit = jest.fn()
    render(
      <IconList
        text="test"
        deny={true}
        edit={true}
        handleClickEdit={mockHandleClickEdit}
      />
    )
    expect(screen.getByTestId('molecules-il-edit-button')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('molecules-il-edit-button'))
    expect(mockHandleClickEdit).toBeCalledTimes(1)
  })

  test('props.delete=true の場合、props.handleClickDelete が呼ばれる。', () => {
    const mockHandleClickDelete = jest.fn()
    render(
      <IconList
        text="test"
        deny={true}
        delete={true}
        handleClickDelete={mockHandleClickDelete}
      />
    )
    expect(screen.getByTestId('molecules-il-delete-button')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('molecules-il-delete-button'))
    expect(mockHandleClickDelete).toBeCalledTimes(1)
  })
})
