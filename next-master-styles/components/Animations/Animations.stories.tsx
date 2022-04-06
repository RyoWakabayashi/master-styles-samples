import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Animations } from './Animations'

export default {
  title: 'Animations'
} as ComponentMeta<typeof Animations>

const Template: ComponentStory<typeof Animations> = (args) => <Animations {...args} />

export const Default = Template.bind({})
