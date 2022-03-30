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
        v-for="(level, index) in levelArray"
        v-show="index > 0"
        :key="index"
        :class="[levelClass, 'background-color:' + colorName + '-' + index]"
      />
    </div>
  </div>
</template>

<script>
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
      levelArray: Array.from({ length: 100 })
    }
  }
}
</script>
