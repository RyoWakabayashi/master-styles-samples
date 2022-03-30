import Colors from './Colors.vue'

export default {
  title: 'Colors'
}

const Template = (args) => ({
  components: { Colors },
  setup () {
    return { ...args }
  },
  template: '<colors />'
})

export const Default = Template.bind({})
