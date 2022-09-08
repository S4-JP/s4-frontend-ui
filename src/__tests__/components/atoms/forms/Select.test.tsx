import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Select, Color, Icon } from '../../../../index'

/**
 * type Props = {
 *   name?: string
 *   defaultData: {
 *     value: string
 *     label: string
 *     image?: string
 *     icon?: React.ReactNode
 *   }
 *   data?: any[]
 *   top?: boolean
 *   className?: string
 *   disabled?: boolean
 *   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
 *   handleClick?(e: React.MouseEvent<HTMLElement>): void
 * }
 */

type DataType = {
  value: string
  label: string
  image?: string
  icon?: React.ReactNode
}
const defaultData: DataType = {
  value: 'test value',
  label: 'test label',
}
const testData: DataType[] = [
  { value: 'test value', label: 'test label' },
  { value: 'test value 1', label: 'test label 1' },
]
const testDataWithIcon: DataType[] = [
  {
    value: 'test value with image',
    label: 'test label with image',
    image: 'test_src',
  },
  {
    value: 'test value with icon',
    label: 'test label with icon',
    icon: <Icon.Cation color={Color.TEXT.GRAY} />,
  },
]

const mockHandleClick = jest.fn()

describe('form - Select のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <Select
        defaultData={defaultData}
        data={testData}
        handleClick={mockHandleClick}
      />
    )

    expect(getByTestId('atoms-f-select-wrap')).toMatchSnapshot()
    expect(screen.getByTestId('atoms-f-select-options')).toHaveStyle(
      'top: 50px;'
    )
  })

  test('disabledを設定した場合、selectがdisableになる。', () => {
    const { getByTestId } = render(
      <Select
        defaultData={defaultData}
        data={testData}
        handleClick={mockHandleClick}
        disabled
      />
    )

    expect(getByTestId('atoms-f-select-wrap')).toHaveAttribute('disabled', '')
  })

  test('SelectItemをクリックした場合、props.handleClickがコールされる。', () => {
    const { getByTestId } = render(
      <Select
        defaultData={defaultData}
        data={testData}
        handleClick={mockHandleClick}
        disabled
      />
    )

    fireEvent.click(getByTestId('atoms-f-select-options-input-0'))
    expect(mockHandleClick).toBeCalledTimes(1)
  })

  test('SelectItemをクリックした場合、SelectとOptionsがフォーカスされる。', () => {
    const { getByTestId } = render(
      <Select
        defaultData={defaultData}
        data={testData}
        handleClick={mockHandleClick}
        disabled
      />
    )

    fireEvent.click(getByTestId('atoms-f-select-selected-item'))
    waitFor(() =>
      expect(getByTestId('atoms-f-select-selected-item')).toHaveFocus()
    )
    waitFor(() => expect(getByTestId('atoms-f-select-options')).toHaveFocus())
  })

  test('SelectItemにimageとiconをセットした場合、レンダリングされる。', () => {
    const { getByTestId } = render(
      <Select
        defaultData={defaultData}
        data={testDataWithIcon}
        handleClick={mockHandleClick}
        disabled
      />
    )

    expect(getByTestId('atoms-f-select-options-input-0')).toMatchSnapshot()
    expect(getByTestId('atoms-f-select-options-input-1')).toMatchSnapshot()
  })

  test('props.topを設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <Select
        defaultData={defaultData}
        data={testDataWithIcon}
        handleClick={mockHandleClick}
        top={true}
      />
    )
    expect(getByTestId('atoms-f-select-options')).toHaveStyle('bottom: 50px;')
  })
})
