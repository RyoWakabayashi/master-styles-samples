import ContentHeader from './ContentHeader.vue'

export default {
  title: 'ContentHeader'
}

const Template = (args) => ({
  components: { ContentHeader },
  setup () {
    return { ...args }
  },
  template: '<content-header />'
})

export const Default = Template.bind({})
