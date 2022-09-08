import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../icon'
import { useRouter } from 'next/router'

type Props = {
  label: string
  link?: string
}

const LinkBack: React.FC<Props> = (props) => {
  const router = useRouter()

  return (
    <LinkBackWrap
      data-testid="atoms-lb-wrap"
      onClick={() => {
        props.link ? router.push(props.link) : router.back()
      }}
    >
      <LinkBackIcon data-testid="atoms-lb-icon">
        <Icon.ChevronLeft size={14} color={Color.TEXT.GRAY} />
      </LinkBackIcon>
      <LinkBackText data-testid="atoms-lb-test">{props.label}</LinkBackText>
    </LinkBackWrap>
  )
}

const LinkBackWrap = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`
const LinkBackIcon = styled.div`
  margin-right: 16px;
`
const LinkBackText = styled.div`
  font-size: 14px;
`

export default LinkBack
