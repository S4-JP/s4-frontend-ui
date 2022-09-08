import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Modal } from '../../../../index'

const mockSetIsShow = jest.fn()
const mockHandleClickCancel = jest.fn()
const mockHandleClickSubmit = jest.fn()
const mockHandleClickOverlay = jest.fn()

describe('モーダルのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(
      <Modal
        title="props.modal.header.title"
        submit={{
          label: 'props.modal.submit.label',
          buttonType: 'primary',
          disabled: false,
          form: 'props.modal.submit.form',
        }}
        noFooter={false}
      />
    )

    expect(screen.getByTestId('molecules-m-header').textContent).toBe(
      'props.modal.header.title'
    )
    expect(screen.getByTestId('molecules-m-submit-button').textContent).toBe(
      'props.modal.submit.label'
    )
    expect(screen.getByTestId('molecules-m-submit-button')).toHaveAttribute(
      'label',
      'props.modal.submit.label'
    )
    expect(screen.getByTestId('molecules-m-submit-button')).toHaveAttribute(
      'form',
      'props.modal.submit.form'
    )
  })

  test('props.isShowにtrueを渡すとOverlayに視覚CSSが適用される。', () => {
    render(<Modal isShow={true} />)

    expect(screen.getByTestId('molecules-m-overlay')).toHaveStyle(
      'visibility: visible;opacity: 1;'
    )
  })

  test('props.isShowにfalseを渡すとOverlayに非視覚CSSが適用される。', () => {
    render(<Modal isShow={false} />)

    expect(screen.getByTestId('molecules-m-overlay')).toHaveStyle(
      'visibility: hidden;opacity: 0;'
    )
  })

  test('props.submit.disabled に true を渡すと非活性になる。', () => {
    render(
      <Modal
        submit={{
          label: 'props.modal.submit.label',
          buttonType: 'primary',
          disabled: true,
        }}
      />
    )

    expect(screen.getByTestId('molecules-m-submit-button')).toHaveAttribute(
      'disabled',
      ''
    )
  })

  test('props.submit.disabled に false を渡すと活性化する。', () => {
    render(
      <Modal
        submit={{
          label: 'props.modal.submit.label',
          buttonType: 'primary',
          disabled: false,
        }}
      />
    )
    expect(screen.getByTestId('molecules-m-submit-button')).not.toHaveAttribute(
      'disabled',
      ''
    )
  })

  test('propsに渡したfunctionがコールされる。', () => {
    render(
      <Modal
        submit={{
          label: 'props.modal.submit.label',
          buttonType: 'primary',
          disabled: false,
        }}
        setIsShow={mockSetIsShow}
        handleClickCancel={mockHandleClickCancel}
        handleClickSubmit={mockHandleClickSubmit}
        handleClickOverlay={mockHandleClickOverlay}
      />
    )

    fireEvent.click(screen.getByTestId('molecules-m-cancel-button'))
    expect(mockHandleClickCancel).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByTestId('molecules-m-submit-button'))
    expect(mockHandleClickSubmit).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByTestId('molecules-m-overlay'))
    expect(mockHandleClickOverlay).toHaveBeenCalledTimes(1)
    expect(mockSetIsShow).toHaveBeenCalledTimes(1)
    expect(mockSetIsShow).toHaveBeenCalledWith(false)
  })
})
