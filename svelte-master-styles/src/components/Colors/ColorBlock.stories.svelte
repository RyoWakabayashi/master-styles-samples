<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Style } from '@master/style';
  import ColorBlock from "./ColorBlock.svelte";

  const colors = Object.keys(Style.colors)
</script>

<Meta
  title="Colors/ColorBlock"
  component={ColorBlock},
  argTypes={{
    colorName: {
      control: { type: 'select' },
      options: colors
    }
  }}
/>

<Template let:args>
  <ColorBlock {...args} />
</Template>

<Story
  name="Black"
  args={{
    colorName: "black",
  }}
/>

<Story
  name="White"
  args={{
    colorName: "white",
  }}
/>

<Story
  name="Red"
  args={{
    colorName: "red",
  }}
/>
