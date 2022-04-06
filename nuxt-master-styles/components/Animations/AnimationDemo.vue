<template>
  <div class="d:flex flex:col w:full align-items:center">
    <code class="f:12">{{ animationClass }}</code>
    <div class="d:flex mt:25 justify-content:center">
      <div :class="animationClass + ' b:1;solid;blue-47 bg:blue-47/.1 p:30 r:5'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationDemo',
  props: {
    animationClass: {
      type: String,
      default: ''
    }
  }
}
</script>
