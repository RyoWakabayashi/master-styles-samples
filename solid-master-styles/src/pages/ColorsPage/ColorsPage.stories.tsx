import { Story } from '../../types/story'
import { Router } from 'solid-app-router'
import { ColorsPage } from './ColorsPage'

export default {
  component: ColorsPage,
  title: 'ColorsPage'
}

const Template: Story = (args) => {
  return (
    <Router>
      <ColorsPage {...args} />
    </Router>
  )
}

export const Default = Template.bind({})
