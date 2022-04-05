<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import OpacityButton from "./OpacityButton.svelte";
</script>

<Meta
  title="Colors/OpacityButton"
  component={OpacityButton}
/>

<Template let:args>
  <OpacityButton {...args} />
</Template>

<Story
  name="Default"
  args={{
    opacity: ".3",
    onClick: () => {
      console.log("clicked");
    }
  }}
/>
