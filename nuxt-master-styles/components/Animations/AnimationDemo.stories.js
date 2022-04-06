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

const Template = ({ animationClass }) => ({
  components: { AnimationDemo },
  props: {
    animationClass: {
      default: animationClass
    }
  },
  template: '<AnimationDemo :animation-class="animationClass" />'
})

export const Default = Template.bind({})
Default.args = {
  animationClass: '@fade;1s;infinite'
}
