import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button, Color } from '../../../../index'

test('require label text', () => {
  render(<Button label="label text" />)
  expect(screen.getByRole('button')).toHaveAttribute('label', 'label text')
  expect(screen.getByRole('button')).toHaveTextContent('label text')
})

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  render(<Button label="click" handleClick={handleClick} />)
  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})

test('buttonType switch - primary', () => {
  render(<Button label="buttonType" buttonType="primary" />)
  expect(screen.getByRole('button')).toHaveStyle(
    `border: 1px solid ${Color.PRIMARY._500};`
  )
})

test('buttonType switch - secondary', () => {
  render(<Button label="buttonType" buttonType="secondary" />)
  expect(screen.getByRole('button')).toHaveStyle(
    `border: 1px solid ${Color.COMPONENT.FORM_BORDER};`
  )
})

test('buttonType switch - danger', () => {
  render(<Button label="buttonType" buttonType="danger" />)
  expect(screen.getByRole('button')).toHaveStyle(
    `border: 1px solid ${Color.COMPONENT.DANGER};`
  )
})

test('small test', () => {
  render(<Button label="small" small />)
  expect(screen.getByRole('button')).toHaveStyle('height: 40px')
})

test('disabled test', () => {
  render(<Button label="disabled" disabled />)
  expect(screen.getByRole('button')).toHaveStyle(
    'opacity: 0.5;pointer-events: none;'
  )
})
