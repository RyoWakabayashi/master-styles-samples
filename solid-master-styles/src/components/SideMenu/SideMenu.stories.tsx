import { Story } from '../../types/story'
import { Router } from 'solid-app-router'
import { SideMenu, SideMenuProps } from './SideMenu'

export default {
  title: 'SideMenu',
  component: SideMenu
}

const Template: Story<SideMenuProps> = (args) => {
  return (
    <Router>
      <SideMenu {...args} />
    </Router>
  )
}

export const Default = Template.bind({})
Default.args = {
  currentMenu: 'colors'
}
