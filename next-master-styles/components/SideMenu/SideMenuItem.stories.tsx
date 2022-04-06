import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SideMenuItem, SideMenuItemProps } from './SideMenuItem'

export default {
  title: 'SideMenu/SideMenuItem',
  component: SideMenuItem
} as ComponentMeta<typeof SideMenuItem>

const Template: ComponentStory<typeof SideMenuItem> = (args) => <SideMenuItem {...args} />

export const Active = Template.bind({})
Active.args = {
  currentMenu: 'colors',
  label: 'Colors',
  route: 'colors'
}

export const Inactive = Template.bind({})
Inactive.args = {
  currentMenu: 'animations',
  label: 'Colors',
  route: 'colors'
}
