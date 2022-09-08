import React from 'react'
import { storiesOf } from '@storybook/react'
import { List, ListItem, TextList } from '../list'
import GlobalStyle from '../../utils//global-style'
import styled from 'styled-components'
import Color from '../../../const/color'

storiesOf('Components/molecules/list', module)
  .add('List S', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>List S</FieldGroupTitle>
        <List>
          <GlobalStyle />
          <ListItem size={40}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={40}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={40} disabled={true} />
        </List>
      </FieldGroup>
    </Wrap>
  ))
  .add('List M', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>List M</FieldGroupTitle>
        <List>
          <GlobalStyle />
          <ListItem size={48}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={48}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={48} disabled={true} />
        </List>
      </FieldGroup>
    </Wrap>
  ))
  .add('List L', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>List L</FieldGroupTitle>
        <List>
          <GlobalStyle />
          <ListItem size={56}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={56}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={56} disabled={true} />
        </List>
      </FieldGroup>
    </Wrap>
  ))
  .add('List XL', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>List L</FieldGroupTitle>
        <List>
          <GlobalStyle />
          <ListItem size={64}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={64}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={64} disabled={true} />
        </List>
      </FieldGroup>
    </Wrap>
  ))
  .add('List XXL', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>List XXL</FieldGroupTitle>
        <List>
          <GlobalStyle />
          <ListItem size={72}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={72}>
            ここに文章が入りますここに文章が入ります
          </ListItem>
          <ListItem size={72} disabled={true} />
        </List>
      </FieldGroup>
    </Wrap>
  ))
  .add('List Contents', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>List Contents</FieldGroupTitle>
        <List>
          <GlobalStyle />
          <ListItem>
            ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります
            ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります
            ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります
            ここに文章が入りますここに文章が入りますここに文章が入りますここに文章が入ります
          </ListItem>
        </List>
      </FieldGroup>
    </Wrap>
  ))
  .add('TextList', () => (
    <Wrap>
      <FieldGroup>
        <FieldGroupTitle>TextList</FieldGroupTitle>
        <List>
          <GlobalStyle />
          <TextList>ここに文章が入ります</TextList>
          <TextList>ここに文章が入ります</TextList>
          <TextList>ここに文章が入ります</TextList>
        </List>
      </FieldGroup>
    </Wrap>
  ))

const Wrap = styled.div`
  display: block;
`
const FieldGroup = styled.div`
  margin-bottom: 32px;
`
const FieldGroupTitle = styled.div`
  margin-bottom: 16px;
  padding: 8px;
  border-bottom: 1px solid ${Color.COMPONENT.FORM_BORDER};
  font-size: 16px;
  font-weight: 600;
`
