import OpacityButton from './OpacityButton.vue'

export default {
  title: 'Colors/OpacityButton',
  component: OpacityButton
}

const Template = ({ opacity }) => ({
  components: { OpacityButton },
  props: {
    opacity: { default: opacity }
  },
  template: '<opacity-button :opacity="opacity"/>'
})

export const Default = Template.bind({})
Default.args = {
  opacity: '.5'
}
