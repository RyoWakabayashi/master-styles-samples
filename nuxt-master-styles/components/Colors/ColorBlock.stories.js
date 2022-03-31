import { Style } from '@master/style'
import ColorBlock from './ColorBlock.vue'

const colors = Object.keys(Style.colors)

export default {
  title: 'Colors/ColorBlock',
  component: ColorBlock,
  argTypes: {
    colorName: {
      control: { type: 'select' },
      options: colors
    }
  }
}

const Template = ({ colorName }) => ({
  components: { ColorBlock },
  props: {
    colorName: { default: colorName }
  },
  template: '<color-block :color-name="colorName" />'
})

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
