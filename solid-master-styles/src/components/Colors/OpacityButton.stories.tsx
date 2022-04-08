import { Story } from '../../types/story'
import { OpacityButton, OpacityButtonProps } from './OpacityButton'

export default {
  component: OpacityButton,
  title: 'Colors/OpacityButton'
}

const Template: Story<OpacityButtonProps> = (args) => <OpacityButton {...args} />

export const Default = Template.bind({})
Default.args = {
  opacity: '.5'
}
