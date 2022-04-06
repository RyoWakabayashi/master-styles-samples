<template>
  <div>
    <h2 class="font:32 font:heavy font:italic m:10">
      Colors
    </h2>
    <div class="m:16 grid-cols:3 grid-cols:5@md gap:15">
      <ColorBlock
        v-for="color in colors"
        :key="color"
        :color-name="color"
      />
    </div>
    <div class-name="m:16 grid-cols:1 gap:10">
      <ColorBelt
        v-for="color in beltColors"
        :key="color"
        :color-name="color"
      />
    </div>
    <div class="mt:2rem">
      <OpacityDemo />
    </div>
  </div>
</template>

<script>
import { Style } from '@master/style'
import ColorBlock from './ColorBlock.vue'
import ColorBelt from './ColorBelt.vue'
import OpacityDemo from './OpacityDemo.vue'

export default {
  name: 'Colors',
  components: {
    ColorBlock,
    ColorBelt,
    OpacityDemo
  },
  computed: {
    colors () {
      return Object.keys(Style.colors)
    },
    beltColors () {
      return Object
        .keys(Style.colors)
        .filter(color => !Style.singleColors.includes(color))
    }
  }
}
</script>
