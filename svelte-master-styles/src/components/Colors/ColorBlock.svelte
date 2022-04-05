<script>
  export let colorName
</script>

<div>
  <div class={`h:40 background-color:${colorName}`} />
  <div class='mt:5 d:flex align-items:center'>
    <span class='f:14 f:semibold'>{colorName}</span>
  </div>
</div>
