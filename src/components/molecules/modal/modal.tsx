import React, { useState } from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Button } from '../../atoms/button/'

type Props = {
  title?: string
  submit?: {
    label: string
    buttonType: 'primary' | 'secondary' | 'danger' | string
    disabled?: boolean
    form?: string
  }
  isShow?: boolean
  setIsShow?: any
  children?: React.ReactNode
  noFooter?: boolean
  handleClickCancel?(e: React.MouseEvent<HTMLElement>): void
  handleClickSubmit?(e: React.MouseEvent<HTMLElement>): void
  handleClickOverlay?(e: React.MouseEvent<HTMLElement>): void
}

const Modal: React.FC<Props> = (props) => {
  return (
    <>
      <Block isShow={props.isShow}>
        {props.title && (
          <Header data-testid="molecules-m-header">{props.title}</Header>
        )}
        {props.children && <Content>{props.children}</Content>}
        {!props.noFooter && (
          <Footer data-testid="molecules-m-footer">
            <Button
              data-testid="molecules-m-cancel-button"
              type={'button'}
              label={'キャンセル'}
              buttonType={'secondary'}
              handleClick={props.handleClickCancel}
              small={true}
            />
            {props.submit && (
              <Button
                data-testid="molecules-m-submit-button"
                type={'button'}
                form={props.submit.form}
                label={props.submit.label}
                buttonType={props.submit.buttonType}
                disabled={props.submit.disabled}
                handleClick={props.handleClickSubmit}
                small={true}
              />
            )}
          </Footer>
        )}
      </Block>
      <Overlay
        data-testid="molecules-m-overlay"
        isShow={props.isShow}
        onClick={(e) => {
          props.handleClickOverlay(e)
          props.setIsShow(false)
        }}
      />
    </>
  )
}

const Overlay = styled.div<{ isShow: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  z-index: 100;
  transition: opacity 0.3s, visibility 0.3s;

  ${({ isShow }) =>
    isShow &&
    `
    visibility: visible;
    opacity: 1;
  `}
`
const Block = styled.div<{ isShow: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 101;
  min-width: 400px;
  background: ${Color.COMPONENT.SURFACE};
  padding: 36px 40px;
  border-radius: 16px;
  box-shadow: ${Color.ELEVATION.XL};
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;

  ${({ isShow }) =>
    isShow &&
    `
    visibility: visible;
    opacity: 1;
  `};

  @media (max-width: 768px) {
    margin: 0.5em;
  }
`
const Header = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  padding-bottom: 24px;
`
const Content = styled.div`
  line-height: 1.71;
`
const Footer = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 24px;
  flex-wrap: wrap;
  button {
    &:not(:first-child) {
      margin-left: 8px;
    }
  }
`

export default Modal
