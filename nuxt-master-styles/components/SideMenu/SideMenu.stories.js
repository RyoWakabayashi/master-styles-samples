import SideMenu from './SideMenu.vue'

export default {
  title: 'SideMenu',
  component: SideMenu
}

const Template = ({ currentMenu }) => ({
  components: { SideMenu },
  props: {
    currentMenu: { default: currentMenu }
  },
  template: '<side-menu :current-menu="currentMenu" />'
})

export const Default = Template.bind({})
Default.args = {
  currentMenu: 'colors'
}
