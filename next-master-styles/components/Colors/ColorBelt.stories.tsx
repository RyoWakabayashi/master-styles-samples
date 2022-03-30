import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ColorBelt } from './ColorBelt'

export default {
  component: ColorBelt,
  title: 'Colors/ColorBelt'
} as ComponentMeta<typeof ColorBelt>;

const Template: ComponentStory<typeof ColorBelt> = (args) => <ColorBelt {...args} />

export const Red = Template.bind({})
Red.args = {
  colorName: 'red'
}

export const Blue = Template.bind({})
Blue.args = {
  colorName: 'blue'
}
