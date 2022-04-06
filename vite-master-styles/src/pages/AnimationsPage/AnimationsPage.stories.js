import AnimationsPage from './AnimationsPage.vue'

export default {
  title: 'AnimationsPage'
}

const Template = (args) => ({
  components: { AnimationsPage },
  setup () {
    return { ...args }
  },
  template: '<animations-page />'
})

export const Default = Template.bind({})
