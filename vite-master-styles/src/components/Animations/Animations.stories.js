import Animations from './Animations.vue'

export default {
  title: 'Animations'
}

const Template = (args) => ({
  components: { Animations },
  setup () {
    return { ...args }
  },
  template: '<animations />'
})

export const Default = Template.bind({})
