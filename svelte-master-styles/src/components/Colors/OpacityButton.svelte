<script lang="ts">
  export let opacity;
  export let onClick;

  const classNames = [
    "bg:fade-5/.8",
    "bg:fade-13/.6:hover",
    "bg:gray-87/.5@dark",
    "bg:gray-87:hover@dark",
    "r:3",
    "px:7",
    "f:mono",
    "h:1.5rem",
    "f:12",
    "f:fade-76",
    "f:gray-34@dark",
    "cursor:pointer",
    "outlined"
  ].join(" ");
</script>

<button type="button" class={classNames} on:click={onClick()}>
  <code>background-color:blue/{opacity}</code>
</button>
