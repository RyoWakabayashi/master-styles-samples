<script>
  import { Style } from '@master/style';
  import ColorBlock from "./ColorBlock.svelte";
  import ColorBelt from "./ColorBelt.svelte";
  import OpacityDemo from "./OpacityDemo.svelte";

  const colors = Object.keys(Style.colors)
  const beltColors = colors.filter(color => !Style.singleColors.includes(color))

</script>

<div>
  <h2 class='font:32 font:heavy font:italic m:10'>Colors</h2>
  <div class='m:16 grid-cols:3 grid-cols:5@md gap:15'>
    {#each colors as color, index (index)}
      <ColorBlock
        colorName={color}
      />
    {/each}
  </div>
  <div class='m:16 grid-cols:1 gap:10'>
    {#each beltColors as color, index (index)}
      <ColorBelt
        colorName={color}
      />
    {/each}
  </div>
  <div class="mt:2rem">
    <OpacityDemo />
  </div>
</div>
