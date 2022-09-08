import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../icon'
import Link from 'next/link'

type Props = {
  href?: string
  title: string
  date?: string
  disabled?: boolean
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const LinkButton: React.FC<Props> = (props) => {
  return (
    <>
      {props.handleClick ? (
        <ScrollWrap {...props} onClick={props.handleClick}>
          <IconWrapper data-testid="atoms-lb-icon-wrapper">
            <ButtonTitle data-testid="atoms-lb-button-title">
              {props.title}
              <DateWrap data-testid="atoms-lb-date-wrap">
                <Icon.History size={11} color={Color.TEXT.BLACK} />
                <DateText data-testid="atoms-lb-date-text">
                  {props.date}
                </DateText>
              </DateWrap>
            </ButtonTitle>
          </IconWrapper>
        </ScrollWrap>
      ) : (
        <Wrap data-testid="atoms-lb-wrap" {...props}>
          {props.href ? (
            <Link href={props.href}>
              <a target="_blank" rel="noreferrer noopener">
                <IconWrapper data-testid="atoms-lb-icon-wrapper">
                  <ButtonTitle data-testid="atoms-lb-button-title">
                    {props.title}
                    <DateWrap data-testid="atoms-lb-date-wrap">
                      <Icon.History size={11} />
                      <DateText data-testid="atoms-lb-date-text">
                        {props.date}
                      </DateText>
                    </DateWrap>
                  </ButtonTitle>
                  <Icon.ExternalLink />
                </IconWrapper>
              </a>
            </Link>
          ) : (
            <IconWrapper data-testid="atoms-lb-icon-wrapper">
              <ButtonTitle data-testid="atoms-lb-button-title">
                {props.title}
                <DateWrap data-testid="atoms-lb-date-wrap">
                  <Icon.History size={11} />
                  <DateText data-testid="atoms-lb-date-text">
                    {props.date}
                  </DateText>
                </DateWrap>
              </ButtonTitle>
              <Icon.ExternalLink />
            </IconWrapper>
          )}
        </Wrap>
      )}
    </>
  )
}

const Wrap = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 148px;
  height: 56px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: ${Color.TEXT.GRAY};
  cursor: ${({ href }) => (href ? 'pointer' : 'initial')};
  opacity: ${({ href }) => (href ? 1 : 0.5)};
  transition: background 0.2s linear;

  &:hover {
    background: ${({ href }) => (href ? Color.COMPONENT.GRAY_HOVER : '')};
    transition: background 0.2s linear;
  }
`
const ButtonTitle = styled.div`
  margin: 0 16px 0 0;
  font-weight: bold;
  font-size: 16px;
  color: ${Color.TEXT.WHITE};
`
const IconWrapper = styled.div`
  fill: ${Color.COMPONENT.SURFACE};
  display: flex;
  align-items: center;
`
const DateWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 6px;
  font-weight: normal;

  > span {
    display: inherit;
    line-height: 1;
  }
`
const DateText = styled.span`
  margin-left: 4px;
  font-size: 12px;
`
const ScrollWrap = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 148px;
  height: 56px;
  padding: 0 16px;
  border: 1px solid ${Color.COMPONENT.BORDER};
  border-radius: 8px;
  background-color: ${Color.TEXT.WHITE};
  cursor: pointer;
  transition: background 0.2s linear;

  ${ButtonTitle} {
    color: ${Color.TEXT.BLACK};
  }
`

export default LinkButton
