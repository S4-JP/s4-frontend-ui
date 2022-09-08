import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Tab, TabItem, Color } from '../../../../index'
import { useRouter } from 'next/router'

/**
 * type Props = {
 *   children: React.ReactNode
 *   className?: string
 * }
 *
 * type Props = {
 *   name: string
 *   link: string
 *   className?: string
 * }
 */

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/test_link',
    }
  },
}))

describe('タブのレンダリング確認', () => {
  test('propsに設定した値でレンダリングされる。', () => {
    render(
      <Tab className="test_class">
        <TabItem
          name="test_item"
          link="/test_link"
          className="test_item_class"
        />
      </Tab>
    )

    expect(screen.getByTestId('molecules-t-wrap')).toHaveClass('test_class')
    expect(screen.getByTestId('molecules-ti-wrap')).toHaveClass(
      'test_item_class'
    )
    expect(screen.getByTestId('molecules-ti-wrap').textContent).toBe(
      'test_item'
    )
    expect(screen.queryByText('test_item')).toHaveAttribute(
      'href',
      '/test_link'
    )
    expect(screen.queryByText('test_item')).toHaveStyle(
      `color: ${Color.TEXT.LINK};`
    )
  })

  test('現在。', () => {
    render(
      <Tab className="test_class">
        <TabItem name="test_item" link="/other" className="test_item_class" />
      </Tab>
    )

    expect(screen.queryByText('test_item')).toHaveStyle(
      `color: ${Color.TEXT.GRAY};`
    )
  })
})
