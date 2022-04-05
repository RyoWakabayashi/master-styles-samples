import OpacityDemo from './OpacityDemo.vue'

export default {
  title: 'Colors/OpacityDemo',
  component: OpacityDemo
}

const Template = () => ({
  components: { OpacityDemo },
  template: '<opacity-demo />'
})

export const Default = Template.bind({})
