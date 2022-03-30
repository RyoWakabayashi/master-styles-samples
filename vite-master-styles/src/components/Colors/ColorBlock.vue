<template>
  <div>
    <div class="h:40" :class="'background-color:' + colorName" />
    <div class="mt:5 d:flex align-items:center">
      <span class="f:14 f:semibold">{{ colorName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'color-block',
  props: {
    colorName: {
      type: String,
      default: 'black'
    }
  }
}
</script>
