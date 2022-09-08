import React from 'react'
import { Story, Meta } from '@storybook/react'
import { IconImage } from '../icon-image/'
import GlobalStyle from '../../utils/global-style'

export default {
  component: IconImage,
  title: 'Components/Atoms/IconImage',
  argTypes: {
    src: {
      defaultValue: '/sample.jpg',
    },
    size: {
      defaultValue: 20,
    },
  },
} as Meta

// @ts-ignore
const Template: Story<ButtonProps> = (args) => (
  <>
    <GlobalStyle />
    <IconImage {...args} />
  </>
)

export const buttons = Template.bind({})

buttons.args = {
  src: '/sample.jpg',
  size: 50,
}
