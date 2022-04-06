import { Story } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { SideMenu, SideMenuProps } from './SideMenu'

export default {
  title: 'SideMenu',
  component: SideMenu
}

const Template: Story<SideMenuProps> = (args) => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <SideMenu {...args} />
    </MemoryRouter>
  )
}

export const Default = Template.bind({})
Default.args = {
  currentMenu: 'colors'
}
