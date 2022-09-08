import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { NextPage } from 'next'
import { ListItem } from '../../molecules/list'
import { IconImage } from '../../atoms/icon-image'
import { Icon } from '../../atoms/icon'
import { useRouter } from 'next/router'
import moment from 'moment'

type Props = {
  vulnerabilityId: number
  severityId: number
  score: string
  detectedAt: string
  profileImage: string
  title: string
  status: number
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

const DashboardListItem: NextPage<Props> = (props) => {
  const router = useRouter()
  moment.locale('ja')

  const handleClick = (id) => {
    router.push(`/vulnerability/${id}`)
  }

  return (
    <StyledListItem
      handleClick={() => {
        handleClick(props.vulnerabilityId)
      }}
    >
      <Header>
        <InfoWrap>
          <LabelSeverity>
            <UrgencyBar data-testid="molecules-dli-urgency-bar" {...props} />
            <LabelText data-testid="molecules-dli-label-text" {...props}>
              {props.score}
            </LabelText>
          </LabelSeverity>
          <DateText data-testid="molecules-dli-date-text">
            {moment(props.detectedAt).format('YYYY/MM/DD HH:mm')}
          </DateText>
        </InfoWrap>
        <StatusWrap data-testid="molecules-dli-status-wrap">
          <IconWrap>
            <IconImage src={props.profileImage} size={24} />
          </IconWrap>
          {props.status === 1 ? (
            <Icon.StatusBacklog size={24} />
          ) : props.status === 9 ? (
            <Icon.StatusDone size={24} />
          ) : props.status === 3 ? (
            <Icon.StatusClosed size={24} />
          ) : (
            props.status === 2 && <Icon.StatusProgress size={24} />
          )}
        </StatusWrap>
      </Header>
      {props.title && <Content>{props.title}</Content>}
    </StyledListItem>
  )
}

const StyledListItem = styled(ListItem)`
  display: block;
  padding: 16px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const DateText = styled.div`
  font-size: 14px;
  color: ${Color.TEXT.LIGHT_GRAY};
`
const InfoWrap = styled.div`
  display: flex;
  align-items: center;
`
const StatusWrap = styled.div`
  display: flex;
  align-items: center;
`
const IconWrap = styled.div`
  margin-right: 8px;
`
const Content = styled.p`
  margin-top: 8px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
`
const LabelSeverity = styled.div`
  display: flex;
`
const LabelText = styled.span`
  margin-right: 16px;
  font-size: 18px;
  font-weight: bold;
  ${getSeverityTextColor};
`
const UrgencyBar = styled.div`
  ${getBackgroundColor};
  width: 8px;
  height: 32px;
  margin: 0 8px 0 0;
  border-radius: 14px;
`

export default DashboardListItem
