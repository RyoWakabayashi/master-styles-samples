<script>
  import SideMenuItem from './SideMenuItem.svelte'

  export let currentMenu

  const classNames = [
    "bg:fade-13::scrollbar-thumb",
    "bg:fade-23::scrollbar-thumb:hover",
    "bg:fade-34::scrollbar-thumb:active",
    "bg:fade-5::scrollbar",
    "bg:gray-57::scrollbar-thumb:active@dark",
    "bg:gray-68::scrollbar-thumb:hover@dark",
    "bg:gray-78::scrollbar-thumb@dark",
    "bg:gray-87::scrollbar@dark",
    "bg:transparent::scrollbar-corner",
    "fixed",
    "h:5::scrollbar",
    "h:calc(100%-3.75rem)@md",
    "h:calc(100%-6rem-1px)",
    "hide@print",
    "left:max(0px,calc(50%-45.3125rem))",
    "overflow-y:auto",
    "overscroll-behavior:contain",
    "r:0!::scrollbar",
    "r:0!::scrollbar-thumb",
    "rounded::scrollbar",
    "rounded::scrollbar-thumb",
    "top:9rem",
    "visibility:hidden:not(:hover)::scrollbar",
    "visibility:hidden:not(:hover)::scrollbar-thumb",
    "w:240@md",
    "w:280@xl",
    "w:5::scrollbar",
    "w:full",
    "z:1050@<md"
  ].join(" ")
</script>

<div class={classNames}>
  <SideMenuItem
    route="colors"
    label="Colors"
    currentMenu={currentMenu}
  />
  <SideMenuItem
    route="animations"
    label="Animations"
    currentMenu={currentMenu}
  />
</div>
