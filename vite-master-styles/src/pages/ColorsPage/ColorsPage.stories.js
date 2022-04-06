import ColorsPage from './ColorsPage.vue'

export default {
  title: 'ColorsPage'
}

const Template = (args) => ({
  components: { ColorsPage },
  setup () {
    return { ...args }
  },
  template: '<colors-page />'
})

export const Default = Template.bind({})
