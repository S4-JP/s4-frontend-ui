import React from 'react'
import { Story, Meta } from '@storybook/react'
import PageHeader from '../page-header'
import GlobalStyle from '../../utils/global-style'
import {
  SearchCheckbox,
  SearchCheckboxGroup,
} from '../../atoms/search-checkbox'

export default {
  component: PageHeader,
  title: 'Components/Molecules/PageHeader',
} as Meta

// @ts-ignore
const Template: Story<Props> = (args) => (
  <>
    <GlobalStyle />
    <PageHeader {...args} />
  </>
)

export const style = Template.bind({})

style.args = {
  title: 'Page Title',
  description: 'Description',
}
