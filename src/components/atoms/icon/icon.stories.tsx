import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'
import Color from '../../../const/color'
import { Icon } from '../icon/'

export default {
  component: Icon,
  title: 'Components/Atoms/Icon',
} as Meta

export const Icons: Story = (args) => (
  <Wrap>
    {Object.keys(Icon).map((key, index) => {
      const IconComponent = Icon[key]
      return (
        <IconWrap key={index} title={key}>
          <IconComponent color={Color.PRIMARY._500} size={20} />
          <Text>{key}</Text>
        </IconWrap>
      )
    })}
  </Wrap>
)

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`
const IconWrap = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  margin-bottom: 32px;
`
const Text = styled.p`
  margin: 0 0 0 8px;
  font-size: 12px;
`
