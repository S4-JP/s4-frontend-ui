import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { InputDate } from '../../../../index'

describe('form - InputDate のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    render(<InputDate value={null} />)

    expect(screen.getByTestId('atoms-f-input-date')).toMatchSnapshot()
  })

  test('propsで値を渡した場合、その値でレンダリングされる。', () => {
    render(
      <InputDate
        name="test date-picker"
        placeholder="Please select a date"
        minDate="2022/01/01"
        value="2022/02/22"
        onChange={jest.fn()}
      />
    )

    expect(screen.getByTestId('atoms-f-input-date')).toMatchSnapshot()
  })

  test('入力して日付を変更した場合、入力された日付のdate object でコールされる。', () => {
    const mockOnChange = jest.fn()
    render(
      <InputDate
        name="test date-picker"
        placeholder="Please select a date"
        minDate="2022/01/01"
        value="2022/02/22"
        onChange={mockOnChange}
      />
    )

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '2022-06-15' },
    })
    expect(mockOnChange).toBeCalledTimes(1)
    expect(mockOnChange).toHaveBeenCalledWith(new Date('2022-06-15'))
  })
})
