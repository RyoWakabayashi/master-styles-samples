import { Story } from '../../types/story'
import { Style } from '@master/style'
import { ColorBlock, ColorBlockProps } from './ColorBlock'

const colors = Object.keys(Style.colors)

export default {
  component: ColorBlock,
  title: 'Colors/ColorBlock',
  argTypes: {
    colorName: {
      control: { type: 'select' },
      options: colors
    }
  }
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
