import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'

type Props = {
  title?: string
  width?: number
  isShow: boolean
  cardRef?: any
  children: React.ReactNode
  className?: string
}

const PopupCard: React.FC<Props> = (props) => {
  return (
    <Wrap
      data-testid="molecules-pc-wrap"
      className={props.className}
      isShow={props.isShow}
      width={props.width}
      ref={props.cardRef}
    >
      {props.title && (
        <Title data-testid="molecules-pc-title">{props.title}</Title>
      )}
      <Contents data-testid="molecules-pc-content">{props.children}</Contents>
    </Wrap>
  )
}

const Wrap = styled.div<{ isShow: boolean; width?: number }>`
  position: absolute;
  top: 48px;
  right: 0;
  width: ${({ width }) => (width ? width : '320')}px;
  max-height: calc(100vh - 96px);
  padding: 24px;
  border-radius: 16px;
  background: ${Color.COMPONENT.SURFACE};
  box-shadow: ${Color.ELEVATION.XXL};
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
  z-index: 10;
  overflow: scroll;

  ${({ isShow }) =>
    isShow &&
    `
      visibility: visible;
      opacity: 1;
  `}
`
const Title = styled.h3`
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
`
const Contents = styled.div`
  position: sticky;
  max-height: calc(100vh - 192px);
  -ms-overflow-style: none;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export default PopupCard
