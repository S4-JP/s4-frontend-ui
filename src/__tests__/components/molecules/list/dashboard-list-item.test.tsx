import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { DashboardListItem, Color } from '../../../../index'

const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockPush,
    }
  },
}))

describe('ダッシュボードリストアイテムのレンダリング確認', () => {
  test('propsのレンダリングチェック', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={101}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={1}
      />
    )

    expect(screen.getByTestId('molecules-dli-date-text').textContent).toBe(
      '2022/06/15 09:00'
    )
    expect(screen.getByTestId('molecules-dli-label-text')).toHaveAttribute(
      'title',
      'title'
    )
    expect(screen.getByTestId('molecules-dli-label-text').textContent).toBe(
      'score'
    )
    expect(screen.getByTestId('atoms-ii-img')).toHaveAttribute(
      'src',
      'data:image/png;base64,test'
    )
  })

  test('ダッシュボードリストアイテムをクリックした場合、props.vulnerabilityId の脆弱性詳細へ遷移する。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={101}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={1}
      />
    )
    fireEvent.click(screen.getByTestId('molecules-li-wrap'))
    expect(mockPush).toBeCalledTimes(1)
    expect(mockPush).toBeCalledWith('/vulnerability/100')
  })
})

describe('Statusのレンダリング確認', () => {
  test('status=1 の場合、StatusBacklog が表示される。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={101}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={1}
      />
    )

    expect(screen.getByTestId('molecules-dli-status-wrap')).toMatchSnapshot()
  })

  test('status=2 の場合、StatusProgress が表示される。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={101}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={2}
      />
    )

    expect(screen.getByTestId('molecules-dli-status-wrap')).toMatchSnapshot()
  })

  test('status=3 の場合、StatusClosed が表示されれる。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={101}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={3}
      />
    )

    expect(screen.getByTestId('molecules-dli-status-wrap')).toMatchSnapshot()
  })

  test('status=9 の場合、StatusDone が表示される。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={101}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={9}
      />
    )

    expect(screen.getByTestId('molecules-dli-status-wrap')).toMatchSnapshot()
  })

  test('status=100 の場合、表示されない。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={101}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={100}
      />
    )

    expect(screen.getByTestId('molecules-dli-status-wrap')).toMatchSnapshot()
  })
})

describe('props.severityId のレンダリング確認', () => {
  test('severityId=5 の場合、背景色が CRITICAL 文字色が CRITICAL になる。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={5}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={100}
      />
    )

    expect(screen.getByTestId('molecules-dli-urgency-bar')).toHaveStyle(
      `background: ${Color.SEVERITY.CRITICAL}`
    )
    expect(screen.getByTestId('molecules-dli-label-text')).toHaveStyle(
      `color: ${Color.SEVERITY.CRITICAL};`
    )
  })

  test('severityId=4 の場合、背景色が HIGH 文字色が HIGH になる。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={4}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={100}
      />
    )

    expect(screen.getByTestId('molecules-dli-urgency-bar')).toHaveStyle(
      `background: ${Color.SEVERITY.HIGH}`
    )
    expect(screen.getByTestId('molecules-dli-label-text')).toHaveStyle(
      `color: ${Color.SEVERITY.HIGH};`
    )
  })

  test('severityId=3 の場合、背景色が MEDIUM 文字色が GRAY になる。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={3}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={100}
      />
    )

    expect(screen.getByTestId('molecules-dli-urgency-bar')).toHaveStyle(
      `background: ${Color.SEVERITY.MEDIUM}`
    )
    expect(screen.getByTestId('molecules-dli-label-text')).toHaveStyle(
      `color: ${Color.TEXT.GRAY};`
    )
  })

  test('severityId=2 の場合、背景色が LOW 文字色が GRAY になる。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={2}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={100}
      />
    )

    expect(screen.getByTestId('molecules-dli-urgency-bar')).toHaveStyle(
      `background: ${Color.SEVERITY.LOW}`
    )
    expect(screen.getByTestId('molecules-dli-label-text')).toHaveStyle(
      `color: ${Color.TEXT.GRAY};`
    )
  })

  test('severityId=1 の場合、背景色が INFO 文字色が GRAY になる。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={1}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={100}
      />
    )

    expect(screen.getByTestId('molecules-dli-urgency-bar')).toHaveStyle(
      `background: ${Color.SEVERITY.INFO}`
    )
    expect(screen.getByTestId('molecules-dli-label-text')).toHaveStyle(
      `color: ${Color.TEXT.GRAY};`
    )
  })

  test('severityId=1-5 以外の場合、背景色が INFO 文字色が GRAY になる。', () => {
    render(
      <DashboardListItem
        vulnerabilityId={100}
        severityId={0}
        score="score"
        detectedAt="2022-06-15 09:00:00"
        profileImage="test"
        title="title"
        status={100}
      />
    )

    expect(screen.getByTestId('molecules-dli-urgency-bar')).toHaveStyle(
      `background: ${Color.SEVERITY.INFO}`
    )
    expect(screen.getByTestId('molecules-dli-label-text')).toHaveStyle(
      `color: ${Color.TEXT.GRAY};`
    )
  })
})
