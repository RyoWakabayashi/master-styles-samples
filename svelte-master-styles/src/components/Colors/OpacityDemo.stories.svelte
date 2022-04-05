<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import OpacityDemo from "./OpacityDemo.svelte";
</script>

<Meta
  title="Colors/OpacityDemo"
  component={OpacityDemo}
/>

<Template let:args>
  <OpacityDemo {...args} />
</Template>

<Story
  name="Default"
/>
