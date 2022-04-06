<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import AnimationsPage from "./AnimationsPage.svelte";
</script>

<Meta
  title="AnimationsPage"
  component={AnimationsPage}
/>

<Template let:args>
  <AnimationsPage {...args} />
</Template>

<Story
  name="Default"
/>
