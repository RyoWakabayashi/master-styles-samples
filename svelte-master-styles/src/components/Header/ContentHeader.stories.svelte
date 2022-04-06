<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import ContentHeader from "./ContentHeader.svelte";
</script>

<Meta
  title="ContentHeader"
  component={ContentHeader}
/>

<Template let:args>
  <ContentHeader {...args} />
</Template>

<Story
  name="Default"
/>
