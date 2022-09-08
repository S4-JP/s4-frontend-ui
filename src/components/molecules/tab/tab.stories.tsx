import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Tab, TabItem } from '../tab'
import GlobalStyle from '../../utils/global-style'

export default {
  component: TabItem,
  title: 'Components/Molecules/Tab',
  parameters: {
    nextRouter: {
      path: '/path',
      asPath: '/',
      pathname: '/',
    },
  },
} as Meta

// @ts-ignore
const Template: Story<Props> = (args) => (
  <>
    <GlobalStyle />
    <Tab>
      <TabItem {...args} />
    </Tab>
  </>
)

export const style = Template.bind({})

style.args = {
  name: 'string',
  link: '/',
}
