import { Style } from '@master/style'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ColorBelt } from './ColorBelt'

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
