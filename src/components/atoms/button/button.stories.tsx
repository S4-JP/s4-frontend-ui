import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Button } from '../button/'
import GlobalStyle from '../../utils/global-style'

export default {
  component: Button,
  title: 'Components/Atoms/Button',
  argTypes: {
    label: {
      defaultValue: 'Button',
    },
    buttonType: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'select' },
    },
  },
} as Meta

// @ts-ignore
const Template: Story<ButtonProps> = (args) => (
  <>
    <GlobalStyle />
    <Button {...args} />
  </>
)

export const Primary = Template.bind({})
export const Secondary = Template.bind({})
export const Danger = Template.bind({})
export const Small = Template.bind({})
export const Disabled = Template.bind({})

Primary.args = {
  label: 'Button',
  buttonType: 'primary',
  small: false,
  disabled: false,
  beforeIcon: '',
  afterIcon: '',
}

Secondary.args = {
  label: 'Button',
  buttonType: 'secondary',
  small: false,
  disabled: false,
  beforeIcon: '',
  afterIcon: '',
}

Danger.args = {
  label: 'Button',
  buttonType: 'danger',
  small: false,
  disabled: false,
  beforeIcon: '',
  afterIcon: '',
}

Small.args = {
  label: 'Button',
  buttonType: 'primary',
  small: true,
  disabled: false,
  beforeIcon: '',
  afterIcon: '',
}

Disabled.args = {
  label: 'Button',
  buttonType: 'primary',
  small: false,
  disabled: true,
  beforeIcon: '',
  afterIcon: '',
}
