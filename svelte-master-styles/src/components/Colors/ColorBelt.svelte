<script>
  export let colorName

  const levels = Array
    .from({ length: 100 })
    .map((_, level) => level)
    .filter(level => level > 0)

  const className = (colorName, level) => {
    return [
      'd:flex',
      'flex-grow:1',
      'h:40',
      'white-space:nowrap',
      'overflow:hidden',
      'd:block:hover>div',
      `background-color:${colorName}-${level}`
    ].join(' ')
  };
</script>

<div>
  <div class='p:10;0 d:flex align-items:center'>
    <div class='mt:5 d:flex align-items:center'>
      <svg class={`w:16 h:16 mr:8 background-color:${colorName}`} />
      <span class='f:semibold'>{colorName}</span>
    </div>
  </div>
  <div class='d:flex flex:row overflow:hidden r:3'>
    {#each levels as level}
      <div
        class={className(colorName, level)}
        key={level}
      />
    {/each}
  </div>
</div>
