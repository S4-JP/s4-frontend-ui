import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  title: string
  description?: string
}

const PageHeader: React.FC<Props> = (props) => {
  return (
    <Wrap>
      <Title data-testid="molecules-ph-title">{props.title}</Title>
      {props.description && (
        <Description data-testid="molecules-ph-description">
          {props.description}
        </Description>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-bottom: 32px;
`
const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
`
const Description = styled.p`
  font-size: 12px;
  color: ${Color.TEXT.GRAY};
`

export default PageHeader
