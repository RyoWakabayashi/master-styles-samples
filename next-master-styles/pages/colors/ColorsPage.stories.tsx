import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ColorsPage } from './ColorsPage'

export default {
  component: ColorsPage,
  title: 'ColorsPage'
} as ComponentMeta<typeof ColorsPage>

const Template: ComponentStory<typeof ColorsPage> = (args) => <ColorsPage {...args} />

export const Default = Template.bind({})
