import React from 'react'
import { render, screen } from '@testing-library/react'
import { FormField } from '../../../../index'

test('no label text', () => {
  render(<FormField />)
  expect(screen.getByTestId('molecules-form-field')).not.toHaveTextContent(
    'label'
  )
})

test('label text', () => {
  render(<FormField label="label" />)
  expect(screen.getByTestId('molecules-form-field')).toHaveTextContent('label')
})

test('set label text and required', () => {
  render(<FormField label="label&required" required={true} />)
  //タグ、改行を無視するために .textContent を評価
  expect(screen.getByTestId('molecules-form-field').textContent).toBe(
    'label&required★'
  )
})

test('set margin bottom', () => {
  render(<FormField marginBottom={10} />)
  expect(screen.getByTestId('molecules-form-field')).toHaveStyle(
    'margin-bottom: 10px'
  )
})
