<template>
  <div>
    <h2 class="font:24 font:heavy m:10">
      Opacity
    </h2>
    <div class="d:flex flex:wrap gap:5 my:10">
      <OpacityButton
        v-for="opacity in opacities"
        :key="opacity"
        :opacity="opacity"
        :on-click="() => setOpacity(opacity)"
      />
    </div>
    <div :class="DEMO">
      <div :class="blockClassName">
        <code class="f:14 font-color:inherit!">
          background-color:blue/{{ currentOpacity }}
        </code>
      </div>
    </div>
  </div>
</template>

<script>
import { DEMO } from '../../classes/demo.js'
import OpacityButton from './OpacityButton'

const opacities = [
  '0',
  '.25',
  '.5',
  '.75',
  '1'
]

const blockClassNamePrefix = [
  'align-items:center',
  'border:4;solid;transparent',
  'd:block',
  'd:flex',
  'f:white',
  'p:5;15'
].join(' ')

export default {
  name: 'OpacityDemo',
  components: {
    OpacityButton
  },
  data: () => {
    return {
      opacities,
      DEMO,
      currentOpacity: '.5'
    }
  },
  computed: {
    blockClassName () {
      return blockClassNamePrefix + ' background-color:blue/' + this.currentOpacity
    }
  },
  methods: {
    setOpacity (value) {
      this.currentOpacity = value
    }
  }
}
</script>
