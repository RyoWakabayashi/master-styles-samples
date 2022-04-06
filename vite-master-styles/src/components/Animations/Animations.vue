<template>
  <div>
    <h2 class='font:32 font:heavy font:italic m:10'>
      Animations
    </h2>
    <div :class="DEMO + ' justify-content:start! grid-cols:4! gap:60;20'">
      <AnimationDemo
        v-for="animationClass in animationClasses"
        :key="animationClass"
        :animation-class="animationClass"
      />
    </div>
  </div>
</template>

<script>
import { DEMO } from '../../classes/demo.js'
import AnimationDemo from './AnimationDemo.vue'
import animationClasses from './animationClasses'

export default {
  name: 'animations',
  components: {
    AnimationDemo
  },
  props: {
    animationClass: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      animationClasses,
      DEMO
    }
  }
}
</script>
