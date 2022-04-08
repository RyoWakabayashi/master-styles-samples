import { Story } from '../../types/story'
import { Animations } from './Animations'

export default {
  title: 'Animations'
}

const Template: Story = (args) => <Animations {...args} />

export const Default = Template.bind({})
