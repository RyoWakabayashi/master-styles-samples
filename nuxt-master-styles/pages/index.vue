<template>
  <div>
    <h1 class="font:40 font:heavy font:italic m:50 text:center">
      Hello Master Styles
    </h1>
    <Colors />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import '@master/normal.css'
import '@master/styles'

export default Vue.extend({
  name: 'IndexPage'
})
</script>
