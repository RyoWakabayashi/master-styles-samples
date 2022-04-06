<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import animationClasses from "./animationClasses";
  import AnimationDemo from "./AnimationDemo.svelte";
</script>

<Meta
  title="Animations/AnimationDemo"
  component={AnimationDemo}
  argTypes={{
    animationClass: {
      control: { type: 'select' },
      options: animationClasses
    }
  }}
/>

<Template let:args>
  <AnimationDemo {...args} />
</Template>

<Story
  name="Fade"
  args={{
    animationClass: "@fade;1s;infinite",
  }}
/>
