import { Style } from '@master/style'
import ColorBelt from './ColorBelt.vue'

const colors = Object
  .keys(Style.colors)
  .filter(color => !Style.singleColors.includes(color))

export default {
  title: 'Colors/ColorBelt',
  component: ColorBelt,
  argTypes: {
    colorName: {
      control: { type: 'select' },
      options: colors
    }
  }
}

const Template = (args) => ({
  components: { ColorBelt },
  setup () {
    return { ...args }
  },
  template: '<color-belt :color-name="colorName" />'
})

export const Red = Template.bind({})
Red.args = {
  colorName: 'red'
}

export const Blue = Template.bind({})
Blue.args = {
  colorName: 'blue'
}
