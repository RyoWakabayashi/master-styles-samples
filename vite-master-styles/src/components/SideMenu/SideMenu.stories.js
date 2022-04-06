import SideMenu from './SideMenu.vue'

export default {
  title: 'SideMenu',
  component: SideMenu
}

const Template = (args) => ({
  components: { SideMenu },
  setup () {
    return { ...args }
  },
  template: '<side-menu :current-menu="currentMenu" />'
})

export const Default = Template.bind({})
Default.args = {
  currentMenu: 'colors'
}
