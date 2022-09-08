import React from 'react'
import styled from 'styled-components'
import Color from '../../../const/color'
import { IconImage } from '../../atoms/icon-image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icon } from '../../atoms/icon'

type Props = {
  items?: any[]
  setIsAlert?: any
  removeHandler?: any
}

const HistoryList: React.FC<Props> = (props) => {
  const router = useRouter()

  const handleLinkClick = (id) => {
    const linkId = Number(id)

    router.push({
      pathname: '/vulnerability/[id]',
      query: { id: linkId },
    })

    props.setIsAlert(false)

    props.removeHandler()
  }

  return (
    <List data-testid="molecules-hl-list">
      {props.items ? (
        <>
          {props.items.map((item, i) => (
            <Item data-testid="molecules-hl-item" key={i}>
              {item.is_newly && (
                <ReadIcon data-testid="molecules-hl-read-icon" />
              )}
              <Left>
                {item.user_id ? (
                  <>
                    {item.user.profile_image && (
                      <IconImage src={item.user.profile_image} size={32} />
                    )}
                  </>
                ) : (
                  <Icon.LogoSymbol
                    data-testid="molecules-hl-logo-symbol"
                    size={32}
                  />
                )}
              </Left>
              <Right>
                <Content
                  data-testid="molecules-hl-content"
                  isRead={item.read_at}
                >
                  {item.type && (
                    <>
                      {/ProjectAssigned/.test(item.type) && (
                        <>
                          {item.user.name}さんが、あなたを「
                          <Link href={'/assets'}>{item.resource.name}</Link>
                          」に追加しました。
                        </>
                      )}
                      {/IssueStatusUpdated/.test(item.type) && (
                        <>
                          {item.user.name}さんが、「
                          <ContentLink
                            data-testid="molecules-hl-content-link"
                            onClick={() => {
                              handleLinkClick(item.resource.id)
                            }}
                          >
                            {item.resource.vuln_id}
                          </ContentLink>
                          」を{item.resource.status_name}に変更しました
                        </>
                      )}
                      {/IssueAssigned/.test(item.type) && (
                        <>
                          {item.user.name}さんが、あなたを「
                          <ContentLink
                            data-testid="molecules-hl-content-link"
                            onClick={() => {
                              handleLinkClick(item.resource.id)
                            }}
                          >
                            {item.resource.vuln_id}
                          </ContentLink>
                          」の担当者に設定しました
                        </>
                      )}
                    </>
                  )}

                  {item.update_contents && (
                    <>
                      {item.update_contents.message ? (
                        <span data-testid="molecules-hl-span" key={i}>
                          {item.update_contents.message}
                        </span>
                      ) : (
                        <>
                          {item.user_id && (
                            <>
                              <HistoryName data-testid="molecules-hl-history-name">
                                {item.user.name}
                              </HistoryName>
                              さんが、
                            </>
                          )}
                          {item.update_contents_front.map((data, i) => (
                            <span key={i}>
                              {i >= 1 && '、'}
                              {data.property}を「
                              {data.new_value}」に
                            </span>
                          ))}
                          変更しました。
                        </>
                      )}
                    </>
                  )}
                </Content>
                <Date>{item.created_at}</Date>
              </Right>
            </Item>
          ))}
        </>
      ) : (
        '履歴はありません'
      )}
    </List>
  )
}

const List = styled.ul``
const Item = styled.li`
  display: flex;
  justify-content: start;
  position: relative;
  padding: 8px 0;
  border-radius: 16px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`
const Left = styled.div`
  > div {
    margin-top: 3px;
  }
`
const Right = styled.div`
  margin-left: 16px;
  line-height: 24px;
`
const Content = styled.div<{ isRead?: boolean }>`
  font-size: 14px;

  a {
    text-decoration: underline;
  }
`
const ContentLink = styled.div`
  display: inline;
  color: ${Color.TEXT.LINK};
  text-decoration: underline;
  cursor: pointer;
`
const Date = styled.span`
  font-size: 12px;
  color: ${Color.TEXT.LIGHT_GRAY};
`
const ReadIcon = styled.div`
  position: absolute;
  top: 4px;
  left: -8px;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background: ${Color.COMPONENT.NOTICE};
`
const HistoryName = styled.span`
  padding-right: 4px;
  font-weight: bold;
`

export default HistoryList
