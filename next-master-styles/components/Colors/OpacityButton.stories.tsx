import { ComponentStory, ComponentMeta } from '@storybook/react'
import { OpacityButton } from './OpacityButton'

export default {
  component: OpacityButton,
  title: 'Colors/OpacityButton'
} as ComponentMeta<typeof OpacityButton>

const Template: ComponentStory<typeof OpacityButton> = (args) => <OpacityButton {...args} />

export const Default = Template.bind({})
Default.args = {
  opacity: '.5'
}
