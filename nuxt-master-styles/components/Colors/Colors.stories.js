import Colors from './Colors.vue'

export default {
  title: 'Colors',
  component: Colors
}

const Template = () => ({
  components: { Colors },
  template: '<colors />'
})

export const Default = Template.bind({})
