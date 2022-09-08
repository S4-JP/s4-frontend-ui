import React from 'react'
import { render } from '@testing-library/react'
import { LabelEmail, LabelIcon, LabelSeverity, Color } from '../../../../index'

describe('label - LabelEmail のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<LabelEmail label="test" />)

    expect(getByTestId('atoms-l-label-email-wrap')).toMatchSnapshot()
  })
})

describe('label - LabelIcon のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(<LabelIcon label="未対応" />)

    expect(getByTestId('atoms-l-label-icon-text')).toMatchSnapshot()
  })
})

type Value = {
  label: string
  expect: string
}
const values: Value[] = [
  { label: '未対応', expect: 'atoms-icon-svg-status-backlog' },
  { label: '対応中', expect: 'atoms-icon-svg-status-progress' },
  { label: '対応済み', expect: 'atoms-icon-svg-status-done' },
  { label: '対応なし', expect: 'atoms-icon-svg-status-closed' },
]

describe.each(values)('LabelIcon - labelを設定した場合', (v) => {
  test(`value:「${v.label}」の時、設定したアイコン「${v.expect}」が表示される。`, () => {
    const { getByTestId } = render(<LabelIcon label={v.label} />)
    expect(getByTestId(v.expect)).toBeInTheDocument()
  })
})

/**
 * type Props = {
 *   severityId: number
 *   severity: string
 *   score: number
 *   version?: number
 *   small?: boolean
 *   short?: boolean
 * }
 */
describe('label - LabelSeverity のレンダリング確認', () => {
  test('オプションなしで設定した場合、初期値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <LabelSeverity severityId={1} severity="緊急" score={10.0} />
    )

    expect(getByTestId('atoms-l-label-severity-wrap')).toMatchSnapshot()
  })
})

type SevValue = {
  severityId: number
  severity: string
  score: number
  expectBg: string
  expectTc: string
}
const sevValues: SevValue[] = [
  {
    severityId: 5,
    severity: '緊急',
    score: 10.0,
    expectBg: Color.SEVERITY.CRITICAL,
    expectTc: Color.SEVERITY.CRITICAL,
  },
  {
    severityId: 4,
    severity: '高',
    score: 8.0,
    expectBg: Color.SEVERITY.HIGH,
    expectTc: Color.SEVERITY.HIGH,
  },
  {
    severityId: 3,
    severity: '中',
    score: 6.0,
    expectBg: Color.SEVERITY.MEDIUM,
    expectTc: Color.TEXT.GRAY,
  },
  {
    severityId: 2,
    severity: '低',
    score: 3.0,
    expectBg: Color.SEVERITY.LOW,
    expectTc: Color.TEXT.GRAY,
  },
  {
    severityId: 1,
    severity: 'なし',
    score: 0.0,
    expectBg: Color.SEVERITY.INFO,
    expectTc: Color.TEXT.GRAY,
  },
]

describe.each(sevValues)('LabelSeverity - labelを設定した場合', (v) => {
  test(`value:「${v.severity}」の時、それぞれ設定される。`, () => {
    const { getByTestId } = render(
      <LabelSeverity
        severityId={v.severityId}
        severity={v.severity}
        score={v.score}
      />
    )

    expect(getByTestId('atoms-l-label-severity-urgency-bar')).toHaveStyle(
      `background: ${v.expectBg}`
    )
    expect(getByTestId('atoms-l-label-severity-severity-text')).toHaveStyle(
      `color: ${v.expectTc}`
    )
    expect(getByTestId('atoms-l-label-severity-score').textContent).toBe(
      '' + v.score
    )
  })
})

describe('label - LabelSeverity オプションのレンダリング確認', () => {
  test('props.small = true で設定した場合、設定値でレンダリングされる。', () => {
    const { getByTestId } = render(
      <LabelSeverity severityId={1} severity="緊急" score={10.0} small={true} />
    )

    expect(getByTestId('atoms-l-label-severity-score')).toHaveStyle(
      'font-size: 18px;'
    )
    expect(getByTestId('atoms-l-label-severity-urgency-bar')).toHaveStyle(
      'width: 8px; height: 48px;margin: 0 8px 0 0; border-radius: 14px'
    )
  })
})
