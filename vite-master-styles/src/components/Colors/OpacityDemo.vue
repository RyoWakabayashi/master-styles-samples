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
    <div :class="demoClassName">
      <div :class="blockClassNamePrefix + ' background-color:blue/' + currentOpacity">
        <code class="f:14 font-color:inherit!">
          background-color:blue/{{ currentOpacity }}
        </code>
      </div>
    </div>
  </div>
</template>

<script>
import OpacityButton from './OpacityButton.vue'

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

const demoClassName = [
  'position:relative',
  'd:flex',
  'flex:wrap',
  'justify-content:center',
  'align-items:center',
  'contain:content',
  'width:full',
  'p:2rem',
  'm:0.625rem',
  'r:0.3125rem',
  'background-color:black'
].join(' ')

export default {
  name: 'OpacityDemo',
  components: {
    OpacityButton
  },
  data: () => {
    return {
      opacities,
      demoClassName,
      blockClassNamePrefix,
      currentOpacity: '.5'
    }
  },
  methods: {
    setOpacity (value) {
      this.currentOpacity = value
    }
  }
}
</script>
