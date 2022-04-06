import { Story } from '@storybook/react'
import { MemoryRouter } from 'react-router'
import { ColorsPage } from './ColorsPage'

export default {
  component: ColorsPage,
  title: 'ColorsPage'
}

const Template: Story = (args) => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <ColorsPage {...args} />
    </MemoryRouter>
  )
}

export const Default = Template.bind({})
