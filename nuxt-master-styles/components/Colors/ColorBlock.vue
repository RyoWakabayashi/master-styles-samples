<template>
  <div>
    <div class="h:40 r:3" :class="'background-color:' + colorName" />
    <div class="mt:5 d:flex align-items:center">
      <span class="f:14 f:semibold">{{ colorName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorBlock',
  props: {
    colorName: {
      type: String,
      default: 'black'
    }
  }
}
</script>
