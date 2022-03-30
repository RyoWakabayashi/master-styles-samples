import ColorBlock from './ColorBlock.vue'

export default {
  title: 'ColorBlock',
  component: ColorBlock
}

const Template = (args) => ({
  components: { ColorBlock },
  setup () {
    return { ...args }
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
