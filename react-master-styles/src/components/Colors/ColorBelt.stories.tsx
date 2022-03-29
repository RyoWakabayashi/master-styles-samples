import { Story } from '@storybook/react'
import { ColorBelt, ColorBeltProps } from './ColorBelt'

export default {
  component: ColorBelt,
  title: 'Colors/ColorBelt'
}

const Template: Story<ColorBeltProps> = (args) => <ColorBelt {...args} />

export const Default = Template.bind({})
Default.args = {
  colorName: 'black'
}
