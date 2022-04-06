import animationClasses from './animationClasses'
import AnimationDemo from './AnimationDemo.vue'

export default {
  title: 'Animations/AnimationDemo',
  component: AnimationDemo,
  argTypes: {
    animationClass: {
      control: { type: 'select' },
      options: animationClasses
    }
  }
}

const Template = (args) => ({
  components: { AnimationDemo },
  setup () {
    return { ...args }
  },
  template: '<animation-demo :animation-class="animationClass" />'
})

export const Default = Template.bind({})
Default.args = {
  animationClass: '@fade;1s;infinite'
}
