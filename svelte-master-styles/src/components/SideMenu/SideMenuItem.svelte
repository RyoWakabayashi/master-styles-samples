<script>
  import { link } from 'svelte-spa-router'

  export let label
  export let route
  export let currentMenu

  const classNames = [
    "block:not([hidden])",
    "r:5 px:12",
    "lh:1.5rem",
    "f:14",
    "f:fade-68",
    "f:gray-45@dark",
    "f:fade-92:hover",
    "f:gray-12:hover@dark",
    "f:bold.active",
    "f:black.active",
    "f:gray-12.active@dark",
    "bg:fade-5:hover:not(.active)",
    "bg:gray-87:hover:not(.active)@dark",
    "contain:content"
  ].join(" ")
</script>

<a
  class="{classNames} {currentMenu === route ? 'active' : ''}"
  href="/{route}"
  use:link
>
  <div class="lines:1 break-word" style="white-space: nowrap;">
    {label}
  </div>
</a>
