import React from 'react'
import { Story, Meta } from '@storybook/react'
import { NotificationIcon } from '../notification-icon/index'
import GlobalStyle from '../../utils/global-style'

export default {
  component: NotificationIcon,
  title: 'Components/Atoms/NotificationIcon',
  argTypes: {
    number: {
      defaultValue: 3,
    },
    omit: {
      defaultValue: false,
    },
  },
} as Meta

// @ts-ignore
const Template: Story<ButtonProps> = (args) => (
  <>
    <GlobalStyle />
    <NotificationIcon {...args} />
  </>
)

export const Icon = Template.bind({})

Icon.args = {
  number: 3,
  omit: false,
}
