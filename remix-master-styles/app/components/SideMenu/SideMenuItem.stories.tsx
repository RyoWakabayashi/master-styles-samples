import { Story } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { SideMenuItem, SideMenuItemProps } from './SideMenuItem'

export default {
  title: 'SideMenu/SideMenuItem',
  component: SideMenuItem
}

const Template: Story<SideMenuItemProps> = (args) => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <SideMenuItem {...args} />
    </MemoryRouter>
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
