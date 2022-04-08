import { Story } from '../../types/story'
import { ContentHeader } from './ContentHeader'

export default {
  component: ContentHeader,
  title: 'ContentHeader'
}

const Template: Story = (args) => <ContentHeader {...args} />

export const Default = Template.bind({})
