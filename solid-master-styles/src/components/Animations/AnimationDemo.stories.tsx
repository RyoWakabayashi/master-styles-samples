import { Story } from '../../types/story'
import { AnimationDemo, AnimationDemoProps } from './AnimationDemo'
import animationClasses from './animationClasses'

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

const Template: Story<AnimationDemoProps> = (args) => <AnimationDemo {...args} />

export const Default = Template.bind({})
Default.args = {
  animationClass: '@fade;1s;infinite'
}
