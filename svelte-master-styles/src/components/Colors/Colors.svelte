<script>
  import { Style } from '@master/style';
  import ColorBlock from "./ColorBlock.svelte";
  import ColorBelt from "./ColorBelt.svelte";

  const colors = Object.keys(Style.colors)
  const beltColors = colors.filter(color => !Style.singleColors.includes(color))

  const classNames = [
    'p:20',
    'background-color:gray-99',
    'font-color:white'
  ].join(' ')
</script>

<div class={classNames}>
  <h2 class='font:32 font:heavy font:italic m:10'>Colors</h2>
  <div class='grid-cols:3 grid-cols:5@md gap:15'>
    {#each colors as color, index (index)}
      <ColorBlock
        colorName={color}
      />
    {/each}
  </div>
  <div class='grid-cols:1 gap:10'>
    {#each beltColors as color, index (index)}
      <ColorBelt
        colorName={color}
      />
    {/each}
  </div>
</div>
