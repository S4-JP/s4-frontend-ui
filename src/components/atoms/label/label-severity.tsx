import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  severityId: number
  severity: string
  score: number
  version?: number
  small?: boolean
  short?: boolean
}

const getBackgroundColor = (props: Props): string => {
  if (props.severityId === 5) {
    return `
      background: ${Color.SEVERITY.CRITICAL};
    `
  } else if (props.severityId === 4) {
    return `
      background: ${Color.SEVERITY.HIGH};
    `
  } else if (props.severityId === 3) {
    return `
      background: ${Color.SEVERITY.MEDIUM};
    `
  } else if (props.severityId === 2) {
    return `
      background: ${Color.SEVERITY.LOW};
    `
  } else {
    return `
      background: ${Color.SEVERITY.INFO};
    `
  }
}

const getSeverityTextColor = (props: Props): string => {
  if (props.severityId === 5) {
    return `
      color: ${Color.SEVERITY.CRITICAL};
    `
  } else if (props.severityId === 4) {
    return `
      color: ${Color.SEVERITY.HIGH};
    `
  } else {
    return `
      color: ${Color.TEXT.GRAY};
    `
  }
}

const LabelSeverity: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="atoms-l-label-severity-wrap">
      <BarWrap data-testid="atoms-l-label-severity-bar-wrap">
        {props.small ? (
          <UrgencyBar
            data-testid="atoms-l-label-severity-urgency-bar"
            {...props}
          />
        ) : (
          <UrgencyBar
            data-testid="atoms-l-label-severity-urgency-bar"
            {...props}
          >
            <LabelText
              data-testid="atoms-l-label-severity-label-text"
              severityId={props.severityId}
            >
              {props.severity}
            </LabelText>
          </UrgencyBar>
        )}
        <ContentWrap
          data-testid="atoms-l-label-severity-content-wrap"
          {...props}
        >
          {props.small ? (
            <>
              <Score
                data-testid="atoms-l-label-severity-score"
                small={props.small}
              >
                {props.score}
              </Score>
              {!props.short && (
                <SeverityText data-testid="atoms-l-label-severity-severity-text">
                  {props.severity}
                </SeverityText>
              )}
            </>
          ) : (
            <>
              <SeverityText data-testid="atoms-l-label-severity-severity-text">
                <Version data-testid="atoms-l-label-severity-version">
                  CVSS
                </Version>
                v{props.version}
              </SeverityText>
              <Score
                data-testid="atoms-l-label-severity-score"
                small={props.small}
              >
                {props.score}
              </Score>
            </>
          )}
        </ContentWrap>
      </BarWrap>
    </Wrap>
  )
}

const Wrap = styled.div``
const BarWrap = styled.div`
  display: flex;
  align-items: center;
`
const ContentWrap = styled.div<Props>`
  margin-bottom: ${({ small }) => (small ? '0' : '4')}px;

  > div {
    ${getSeverityTextColor};
  }
`
const Score = styled.div<{ small?: boolean }>`
  font-size: ${({ small }) => (small ? '18px' : '28px')};
  font-weight: bold;
  line-height: 1.11;
`
const SeverityText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.67;
`
const Version = styled.span`
  margin-right: 3px;
`
const LabelText = styled.span<{ severityId?: number }>`
  ${({ severityId }) =>
    severityId === 5 || severityId === 4 || severityId === 3
      ? `color: ${Color.TEXT.WHITE};`
      : `color: ${Color.TEXT.GRAY};`}
  display: inline-block;
  margin: 24px 16px;
  font-size: 18px;
  font-weight: bold;
`
const UrgencyBar = styled.div`
  ${getBackgroundColor};
  width: ${({ small }) => (small ? '8px' : '68px')};
  height: ${({ small }) => (small ? '48px' : '68px')};
  margin: 0 ${({ small }) => (small ? '8px' : '16px')} 0 0;
  border-radius: ${({ small }) => (small ? '14px' : '8px')};
`

export default LabelSeverity
