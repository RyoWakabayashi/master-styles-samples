<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import SideMenuItem from "./SideMenuItem.svelte";
</script>

<Meta
  title="SideMenu/SideMenuItem"
  component={SideMenuItem}
/>

<Template let:args>
  <SideMenuItem {...args} />
</Template>

<Story
  name="Active"
  args={{
    currentMenu: "colors",
    label: "Colors",
    route: "colors"
  }}
/>

<Story
  name="Inactive"
  args={{
    currentMenu: "animations",
    label: "Colors",
    route: "colors"
  }}
/>
