import { Story } from '@storybook/react'
import { Style } from '@master/style'
import { ColorBelt, ColorBeltProps } from './ColorBelt'

const colors = Object
  .keys(Style.colors)
  .filter(color => !Style.singleColors.includes(color))

export default {
  component: ColorBelt,
  title: 'Colors/ColorBelt',
  argTypes: {
    colorName: {
      control: { type: 'select' },
      options: colors
    }
  }
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
