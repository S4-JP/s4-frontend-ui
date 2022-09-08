import React, { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Color from '../../../const/color'
import { useRouter } from 'next/router'

type Props = {
  name: string
  link: string
  className?: string
}

const TabItem: React.FC<Props> = (props) => {
  const router = useRouter()

  const currentPath = (path) => {
    return router.pathname === path
  }

  return (
    <Wrap
      data-testid="molecules-ti-wrap"
      className={props.className}
      current={currentPath(props.link)}
    >
      <Link href={props.link}>{props.name}</Link>
    </Wrap>
  )
}

const Wrap = styled.li<{ current?: boolean }>`
  margin-right: 8px;

  a {
    position: relative;
    display: block;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ current }) => (current ? Color.TEXT.LINK : Color.TEXT.GRAY)};

    &:hover {
      background: ${Color.COMPONENT.BORDER};
    }

    ${({ current }) =>
      current &&
      `
    &::after {
      position: absolute;
      left: 0;
      bottom: -4px;
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background: ${Color.TEXT.LINK};
      content: '';
    }
    `}
  }
`

export default TabItem
