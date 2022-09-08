import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormFieldMask } from '../../../../index'

const Dummy = () => <span>dummy</span>

test('form-field-mask isShow=false', () => {
  render(
    <FormFieldMask isShow={false}>
      <Dummy />
    </FormFieldMask>
  )

  expect(screen.getByTestId('molecules-ffm-form')).toHaveStyle('display: none;')
  expect(screen.getByTestId('molecules-ffm-mask')).toHaveStyle(
    'margin-bottom: 0'
  )
})

test('form-field-mask isShow=true', () => {
  render(
    <FormFieldMask isShow>
      <Dummy />
    </FormFieldMask>
  )

  expect(screen.getByTestId('molecules-ffm-form')).toHaveStyle('display: flex;')
})

test('form-field-mask isShow=false value', () => {
  render(
    <FormFieldMask isShow={false} value="test value">
      <Dummy />
    </FormFieldMask>
  )

  expect(screen.getByTestId('molecules-ffm-mask').textContent).toBe(
    'test value'
  )
})

test('form-field-mask margin', () => {
  render(
    <FormFieldMask isShow={false} margin={10}>
      <Dummy />
    </FormFieldMask>
  )

  expect(screen.getByTestId('molecules-ffm-mask')).toHaveStyle(
    'margin-bottom: 10px'
  )
})
