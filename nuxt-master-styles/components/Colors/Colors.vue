
<template>
  <div :class="classNames">
    <h2 class="font:32 font:heavy font:italic m:10">
      Colors
    </h2>
    <div class="grid-cols:3 grid-cols:5@md gap:15">
      <ColorBlock color-name="black" />
      <ColorBlock color-name="white" />
      <ColorBlock
        v-for="color in colors"
        :key="color"
        :color-name="color"
      />
    </div>
    <div class-name="grid-cols:1 gap:10">
      <ColorBelt
        v-for="color in colors"
        :key="color"
        :color-name="color"
      />
    </div>
  </div>
</template>

<script>
import ColorBlock from './ColorBlock'
import ColorBelt from './ColorBelt'

export default {
  name: 'Colors',
  components: {
    ColorBlock,
    ColorBelt
  },
  data: () => {
    return {
      colors: [
        'fade',
        'gray',
        'brown',
        'orange',
        'gold',
        'yellow',
        'grass',
        'green',
        'beryl',
        'teal',
        'cyan',
        'sky',
        'blue',
        'indigo',
        'violet',
        'purple',
        'fuchsia',
        'pink',
        'crimson',
        'red'
      ],
      classNames: [
        'p:20',
        'background-color:gray-99',
        'font-color:white'
      ]
    }
  }
}
</script>
