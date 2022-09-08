import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../../atoms/icon'

type Props = {
  loginGoogleEnable: boolean
  loginMsEnable: boolean
  loginOktaEnable: boolean
  loginOkta: boolean
  handleLoginGoogle(e: React.MouseEvent<HTMLElement>): void
  handleLoginMicrosoft(e: React.MouseEvent<HTMLElement>): void
  handleLoginOkta(e: React.MouseEvent<HTMLElement>): void
  loginWithLabelGoogle: string
  loginWithLabelMicrosoft: string
  loginWithLabelOkta: string
  submittingText: string
  loginTitle: string
}

const LoginForm: React.FC<Props> = (props) => {
  return (
    <Wrap>
      <IconWrap>
        <Icon.LogoSymbol size={50} />
        <Icon.LogoType size={70} />
      </IconWrap>

      <Title data-testid="molecules-lf-title">{props.loginTitle}</Title>

      <LoginButtonWrap>
        <LoginButton
          data-testid="molecules-lf-ggl-button"
          onClick={props.handleLoginGoogle}
          isLogging={props.loginGoogleEnable}
        >
          <LoginButtonLogo>
            <Icon.LogoGoogle size={18} />
          </LoginButtonLogo>
          <LoginButtonText>
            {props.loginGoogleEnable
              ? props.submittingText
              : props.loginWithLabelGoogle}
          </LoginButtonText>
        </LoginButton>

        <LoginButton
          data-testid="molecules-lf-ms-button"
          onClick={props.handleLoginMicrosoft}
          isLogging={props.loginMsEnable}
        >
          <LoginButtonLogo>
            <Icon.LogoMs size={19} />
          </LoginButtonLogo>
          <LoginButtonText>
            {props.loginMsEnable
              ? props.submittingText
              : props.loginWithLabelMicrosoft}
          </LoginButtonText>
        </LoginButton>

        {props.loginOkta && (
          <LoginButton
            data-testid="molecules-lf-okt-button"
            onClick={props.handleLoginOkta}
            isLogging={props.loginOktaEnable}
          >
            <LoginButtonLogo>
              <Image src={'/logo_okta.png'} width={24} height={24} />
            </LoginButtonLogo>
            <LoginButtonText>
              {props.loginOktaEnable
                ? props.submittingText
                : props.loginWithLabelOkta}
            </LoginButtonText>
          </LoginButton>
        )}
      </LoginButtonWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 381px;
  height: 432px;
  padding: 64px 50px;
  border-radius: 16px;
  background: ${Color.COMPONENT.SURFACE};
  box-shadow: ${Color.ELEVATION.L};
`
const IconWrap = styled.div`
  display: flex;
  align-items: center;

  > *:first-child {
    margin-right: 16px;
  }
`
const Title = styled.h1`
  margin-top: 50px;
  font-weight: normal;
`
const LoginButtonWrap = styled.div`
  width: 100%;
`
const LoginButton = styled.div<{ isLogging?: boolean }>`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: auto;
  height: 40px;
  margin-bottom: 16px;
  border: 1px solid ${Color.COMPONENT.FORM_BORDER};
  border-radius: 8px;
  cursor: pointer;

  ${({ isLogging }) => isLogging && `pointer-events: none;`}
  &:last-child {
    margin: 0;
  }
`
const LoginButtonLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 2;
`
const LoginButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  font-size: 14px;
  font-weight: 600;
`
const Logging = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1/3;
  pointer-events: none;
`

export default LoginForm
