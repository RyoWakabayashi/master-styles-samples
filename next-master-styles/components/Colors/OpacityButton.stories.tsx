import { Story } from '@storybook/react'
import { OpacityButton, OpacityButtonProps } from './OpacityButton'

export default {
  component: OpacityButton,
  title: 'Colors/OpacityButton'
} as ComponentMeta<typeof OpacityButton>

const Template: Story<OpacityButtonProps> = (args) => <OpacityButton {...args} />

export const Default = Template.bind({})
Default.args = {
  opacity: '.5'
}
