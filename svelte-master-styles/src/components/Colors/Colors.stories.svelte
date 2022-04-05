<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Colors from "./Colors.svelte";
</script>

<Meta
  title="Colors"
  component={Colors}
/>

<Template let:args>
  <Colors {...args} />
</Template>

<Story
  name="Default"
/>
