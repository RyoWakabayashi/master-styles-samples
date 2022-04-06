<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SideMenu from "./SideMenu.svelte";
</script>

<Meta
  title="SideMenu"
  component={SideMenu}
/>

<Template let:args>
  <SideMenu {...args} />
</Template>

<Story
  name="Default"
  args={{
    currentMenu: "colors",
  }}
/>
