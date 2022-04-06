import { ComponentStory, ComponentMeta } from '@storybook/react'
import { OpacityDemo } from './OpacityDemo'

export default {
  component: OpacityDemo,
  title: 'Colors/OpacityDemo'
} as ComponentMeta<typeof OpacityDemo>

const Template: ComponentStory<typeof OpacityDemo> = () => <OpacityDemo />

export const Default = Template.bind({})
