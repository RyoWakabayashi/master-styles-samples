import { Story } from '@storybook/react'
import { ColorBlock, ColorBlockProps } from './ColorBlock'

export default {
  component: ColorBlock,
  title: 'Colors/ColorBlock'
}

const Template: Story<ColorBlockProps> = (args) => <ColorBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  colorName: 'black'
}
