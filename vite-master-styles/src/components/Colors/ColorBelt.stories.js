import ColorBelt from './ColorBelt.vue'

export default {
  title: 'ColorBelt',
  component: ColorBelt
}

const Template = (args) => ({
  components: { ColorBelt },
  template: '<color-belt v-bind="args" />'
})

export const Red = Template.bind({})
Red.args = {
  colorName: 'red'
}

export const Blue = Template.bind({})
Blue.args = {
  colorName: 'blue'
}
