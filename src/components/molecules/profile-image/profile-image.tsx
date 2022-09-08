import React, { useState } from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../../atoms/icon'

type Props = {
  src: string
  handleClick?(e: React.MouseEvent<HTMLElement>): void
}

const ProfileImage: React.FC<Props> = (props) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <ProfileImageWrap>
      <ImageWrap
        data-testid="molecules-pi-image-wrap"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {props.src ? (
          <img
            data-testid="molecules-pi-img"
            src={`data:image/png;base64,${props.src}`}
            alt=""
          />
        ) : (
          <>No Image</>
        )}

        {props.handleClick && (
          <HoverImage data-testid="molecules-pi-hover-image" isHover={isHover}>
            <Icon.Camera color={Color.COMPONENT.SURFACE} size={40} />
          </HoverImage>
        )}
      </ImageWrap>
    </ProfileImageWrap>
  )
}

const ProfileImageWrap = styled.div`
  position: relative;
`
const ImageWrap = styled.div<{ onClick?: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background: ${Color.SEVERITY.INFO};
  font-size: 24px;
  color: ${Color.TEXT.GRAY};
  cursor: pointer;
  overflow: hidden;

  img {
    width: 160px;
    height: 160px;
    border: none;
    object-fit: cover;
  }
`
const HoverImage = styled.div<{ isHover?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  transition: opacity 0.2s ease-out;
`

export default ProfileImage
