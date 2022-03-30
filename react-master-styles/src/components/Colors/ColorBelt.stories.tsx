import { Story } from '@storybook/react'
import { ColorBelt, ColorBeltProps } from './ColorBelt'

export default {
  component: ColorBelt,
  title: 'Colors/ColorBelt'
}

const Template: Story<ColorBeltProps> = (args) => <ColorBelt {...args} />

export const Red = Template.bind({})
Red.args = {
  colorName: 'red'
}

export const Blue = Template.bind({})
Blue.args = {
  colorName: 'blue'
}
