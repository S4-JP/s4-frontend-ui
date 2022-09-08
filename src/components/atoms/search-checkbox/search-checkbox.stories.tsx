import React from 'react'
import { Story, Meta } from '@storybook/react'
import Color from '../../../const/color'
import { Icon } from '../icon'
import {
  SearchCheckbox,
  SearchCheckboxGroup,
} from '../search-checkbox/index'
import GlobalStyle from '../../utils/global-style'

export default {
  component: SearchCheckbox,
  title: 'Components/Atoms/SearchCheckbox',
  argTypes: {
    name: {},
    value: {},
    color: {
      control: { type: 'select' },
      options: [
        Color.SEVERITY.CRITICAL,
        Color.SEVERITY.HIGH,
        Color.SEVERITY.MEDIUM,
        Color.SEVERITY.LOW,
        Color.SEVERITY.INFO,
      ],
    },
  },
} as Meta

// @ts-ignore
const TemplateUrgency: Story<Props> = (args) => (
  <>
    <GlobalStyle />
    <SearchCheckboxGroup>
      <SearchCheckbox {...args} />
    </SearchCheckboxGroup>
  </>
)

// @ts-ignore
const TemplateStatus: Story<Props> = (args) => (
  <>
    <GlobalStyle />
    <SearchCheckboxGroup>
      <SearchCheckbox {...args} />
    </SearchCheckboxGroup>
  </>
)

export const Urgency = TemplateUrgency.bind({})
export const Status = TemplateStatus.bind({})

Urgency.args = {
  name: 'string',
  value: 'string',
  children: '重要度',
  color: Color.SEVERITY.CRITICAL,
}

Status.args = {
  name: 'string',
  value: 'string',
  children: '対応状況',
  color: false,
  icon: <Icon.StatusDone />,
}
