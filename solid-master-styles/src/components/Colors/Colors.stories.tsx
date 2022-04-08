import { Story } from '../../types/story'
import { Colors } from './Colors'

export default {
  component: Colors,
  title: 'Colors'
}

const Template: Story = (args) => <Colors {...args} />

export const Default = Template.bind({})
