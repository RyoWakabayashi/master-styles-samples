import { Story } from '@storybook/react'
import { OpacityDemo } from './OpacityDemo'

export default {
  component: OpacityDemo,
  title: 'Colors/OpacityDemo'
}

const Template: Story = () => <OpacityDemo />

export const Default = Template.bind({})
