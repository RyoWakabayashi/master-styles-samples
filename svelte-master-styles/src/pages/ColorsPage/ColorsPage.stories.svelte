<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ColorsPage from "./ColorsPage.svelte";
</script>

<Meta
  title="ColorsPage"
  component={ColorsPage}
/>

<Template let:args>
  <ColorsPage {...args} />
</Template>

<Story
  name="Default"
/>
