import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { Icon } from '../../atoms/icon/'
import { IconButton } from '../../atoms/icon-button/'

type Props = {
  text: string
  icon?: React.ReactNode
  deny: boolean
  edit?: boolean
  delete?: boolean
  handleClickEdit?(e: React.MouseEvent<HTMLElement>): void
  handleClickDelete?(e: React.MouseEvent<HTMLElement>): void
}

const getColors = (props: Props): string => {
  if (props.deny) {
    return `
      background: ${Color.COMPONENT.DENY};
      color: ${Color.TEXT.BLACK};
    `
  } else {
    return `
      background: ${Color.COMPONENT.ALLOW};
      color: ${Color.TEXT.BLACK};
    `
  }
}

const IconList: React.FC<Props> = (props) => {
  return (
    <Wrap data-testid="molecules-il-wrap" {...props}>
      <LeftWrap>
        {props.icon}
        <Text data-testid="molecules-il-text">{props.text}</Text>
      </LeftWrap>
      <RightWrap>
        {props.edit && (
          <IconButtonWrap>
            <IconButton>
              <Icon.Pen
                data-testid="molecules-il-edit-button"
                size={'16'}
                color={Color.TEXT.GRAY}
                onClick={props.handleClickEdit}
              />
            </IconButton>
          </IconButtonWrap>
        )}
        {props.delete && (
          <IconButtonWrap>
            <IconButton>
              <Icon.Trash
                data-testid="molecules-il-delete-button"
                size={'16'}
                color={Color.TEXT.GRAY}
                onClick={props.handleClickDelete}
              />
            </IconButton>
          </IconButtonWrap>
        )}
      </RightWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  ${getColors};
  padding: 8px 8px 8px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  width: 100%;
`

const LeftWrap = styled.div`
  display: flex;
  align-items: center;
  width: 93%;
`

const RightWrap = styled.div`
  display: flex;
  align-items: center;
`

const Text = styled.p`
  padding: 11px 0;
  margin-left: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  overflow-wrap: anywhere;
`

const IconButtonWrap = styled.div`
  margin-left: 8px;
`

export default IconList
