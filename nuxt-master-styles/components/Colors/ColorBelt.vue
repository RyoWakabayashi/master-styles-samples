<template>
  <div>
    <div class="p:10;0 d:flex align-items:center">
      <div class="mt:5 d:flex align-items:center">
        <svg class="w:16 h:16 mr:8" :class="'background-color:' + colorName" />
        <span class="f:semibold">{{ colorName }}</span>
      </div>
    </div>
    <div class="d:flex flex:row overflow:hidden r:3">
      <div
        v-for="level in levels"
        :key="level"
        :class="[levelClass, 'background-color:' + colorName + '-' + level]"
      />
    </div>
  </div>
</template>

<script>

const levels = Array
  .from({ length: 100 })
  .map((_, level) => level)
  .filter(level => level > 0)

export default {
  name: 'ColorBelt',
  props: {
    colorName: {
      type: String,
      default: 'red'
    }
  },
  data: () => {
    return {
      levelClass: {
        'd:flex': true,
        'flex-grow:1': true,
        'h:40': true,
        'white-space:nowrap': true,
        'overflow:hidden': true,
        'd:block:hover>div': true
      },
      levels
    }
  }
}
</script>
