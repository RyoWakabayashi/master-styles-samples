<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import { Style } from '@master/style';
  import ColorBelt from "./ColorBelt.svelte";

  const colors = Object
    .keys(Style.colors)
    .filter(color => !Style.singleColors.includes(color))
</script>

<Meta
  title="Colors/ColorBelt"
  component={ColorBelt}
  argTypes={{
    colorName: {
      control: { type: 'select' },
      options: colors
    }
  }}
/>

<Template let:args>
  <ColorBelt {...args} />
</Template>

<Story
  name="Red"
  args={{
    colorName: "red",
  }}
/>

<Story
  name="Blue"
  args={{
    colorName: "blue",
  }}
/>
