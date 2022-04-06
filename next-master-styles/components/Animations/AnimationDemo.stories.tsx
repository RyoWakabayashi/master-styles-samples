import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AnimationDemo } from './AnimationDemo'
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
} as ComponentMeta<typeof AnimationDemo>

const Template: ComponentStory<typeof AnimationDemo> = (args) => <AnimationDemo {...args} />

export const Default = Template.bind({})
Default.args = {
  animationClass: '@fade;1s;infinite'
}
