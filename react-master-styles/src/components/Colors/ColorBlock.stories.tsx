import { Story } from '@storybook/react'
import { ColorBlock, ColorBlockProps } from './ColorBlock'

export default {
  component: ColorBlock,
  title: 'Colors/ColorBlock'
}

const Template: Story<ColorBlockProps> = (args) => <ColorBlock {...args} />

export const Black = Template.bind({})
Black.args = {
  colorName: 'black'
}

export const White = Template.bind({})
White.args = {
  colorName: 'white'
}

export const Red = Template.bind({})
Red.args = {
  colorName: 'red'
}
