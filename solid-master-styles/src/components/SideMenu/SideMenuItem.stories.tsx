import { Story } from '../../types/story'
import { Router } from 'solid-app-router'
import { SideMenuItem, SideMenuItemProps } from './SideMenuItem'

export default {
  title: 'SideMenu/SideMenuItem',
  component: SideMenuItem
}

const Template: Story<SideMenuItemProps> = (args) => {
  return (
    <Router>
      <SideMenuItem {...args} />
    </Router>
  )
}

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
