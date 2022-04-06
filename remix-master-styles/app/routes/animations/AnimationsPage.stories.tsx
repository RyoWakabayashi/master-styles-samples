import { Story } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { AnimationsPage } from './AnimationsPage'

export default {
  component: AnimationsPage,
  title: 'AnimationsPage'
}

const Template: Story = (args) => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <AnimationsPage {...args} />
    </MemoryRouter>
  )
}

export const Default = Template.bind({})
