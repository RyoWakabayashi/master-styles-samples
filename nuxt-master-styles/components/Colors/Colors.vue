
<template>
  <div :class="classNames">
    <h2 class="font:32 font:heavy font:italic m:10">
      Colors
    </h2>
    <div class="grid-cols:3 grid-cols:5@md gap:15">
      <ColorBlock
        v-for="color in colors"
        :key="color"
        :color-name="color"
      />
    </div>
    <div class-name="grid-cols:1 gap:10">
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
import '@master/styles'
import { Style } from '@master/style'
import ColorBlock from './ColorBlock'
import ColorBelt from './ColorBelt'
import OpacityDemo from './OpacityDemo'

const colors = Object.keys(Style.colors)
const beltColors = colors.filter(color => !Style.singleColors.includes(color))

export default {
  name: 'Colors',
  components: {
    ColorBlock,
    ColorBelt,
    OpacityDemo
  },
  data: () => {
    return {
      colors,
      beltColors,
      classNames: [
        'p:20',
        'background-color:gray-99',
        'font-color:white'
      ]
    }
  }
}
</script>
