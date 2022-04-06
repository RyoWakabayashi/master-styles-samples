import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { AnimationsPage } from './AnimationsPage'

export default {
  component: AnimationsPage,
  title: 'AnimationsPage'
} as ComponentMeta<typeof AnimationsPage>

const Template: ComponentStory<typeof AnimationsPage> = (args) => <AnimationsPage {...args} />

export const Default = Template.bind({})
