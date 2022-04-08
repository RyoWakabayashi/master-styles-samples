import { Story } from '../../types/story'
import { Router } from 'solid-app-router'
import { AnimationsPage } from './AnimationsPage'

export default {
  component: AnimationsPage,
  title: 'AnimationsPage'
}

const Template: Story = (args) => {
  return (
    <Router>
      <AnimationsPage {...args} />
    </Router>
  )
}

export const Default = Template.bind({})
