<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Animations from "./Animations.svelte";
</script>

<Meta
  title="Animations"
  component={Animations}
/>

<Template let:args>
  <Animations {...args} />
</Template>

<Story
  name="Default"
/>
