import SideMenuItem from './SideMenuItem.vue'

export default {
  title: 'SideMenu/SideMenuItem',
  component: SideMenuItem
}

const Template = (args) => ({
  components: { SideMenuItem },
  setup () {
    return { ...args }
  },
  template: '<side-menu-item :label="label" :route="route" :current-menu="currentMenu" />'
})

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
