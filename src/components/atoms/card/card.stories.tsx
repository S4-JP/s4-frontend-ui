import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Card } from '../card/'
import GlobalStyle from '../../utils/global-style'
import PageHeader from '../..//molecules/page-header'

export default {
  component: Card,
  title: 'Components/Atoms/Card',
  argTypes: {
    elevation: {
      defaultValue: 'S',
      description: 'box-shadowの階層',
      options: ['S', 'M', 'L', 'XL', 'XXL'],
      control: { type: 'select' },
    },
  },
} as Meta

// @ts-ignore
const Template: Story<Props> = (args) => (
  <>
    <GlobalStyle />
    <Card {...args} />
  </>
)

export const Elevation = Template.bind({})

Elevation.args = {
  title: 'カードタイトル',
  margin: 0,
}
