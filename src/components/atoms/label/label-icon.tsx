import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon'

type Props = {
  label: string
}

function IconSet(props) {
  const label = props.label
  if (label === '未対応') return <Icon.StatusBacklog />
  else if (label === '対応中') return <Icon.StatusProgress />
  else if (label === '対応済み') return <Icon.StatusDone />
  else if (label === '対応なし') return <Icon.StatusClosed />
}

const LabelIcon: React.FC<Props> = (props) => {
  return (
    <Text data-testid="atoms-l-label-icon-text">
      <IconWrap data-testid="atoms-l-label-icon-wrap">
        <IconSet label={props.label} />
      </IconWrap>
      {props.label}
    </Text>
  )
}

const Text = styled.div`
  display: flex;
  margin-bottom: 28px;
`
const IconWrap = styled.div`
  margin-right: 8px;
`

export default LabelIcon
