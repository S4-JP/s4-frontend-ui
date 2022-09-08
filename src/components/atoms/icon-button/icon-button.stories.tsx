import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Icon } from '../icon'
import { IconButton } from '../icon-button/'
import GlobalStyle from '../../utils/global-style'

export default {
  component: IconButton,
  title: 'Components/Atoms/IconButton',
} as Meta

// @ts-ignore
const Template: Story<ButtonProps> = (args) => (
  <>
    <GlobalStyle />
    <IconButton {...args}>
      <Icon.Plus />
    </IconButton>
  </>
)

export const button = Template.bind({})

button.args = {
  focus: false,
}
