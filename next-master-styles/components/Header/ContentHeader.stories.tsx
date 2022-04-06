import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContentHeader } from './ContentHeader'

export default {
  component: ContentHeader,
  title: 'ContentHeader'
} as ComponentMeta<typeof ContentHeader>

const Template: ComponentStory<typeof ContentHeader> = (args) => <ContentHeader {...args} />

export const Default = Template.bind({})
