import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { SideMenu, SideMenuProps } from './SideMenu'

export default {
  title: 'SideMenu',
  component: SideMenu
} as ComponentMeta<typeof SideMenu>

const Template: ComponentStory<typeof SideMenu> = (args) => <SideMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  currentMenu: 'colors'
}
