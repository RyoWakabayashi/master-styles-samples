<template>
  <button type="button" :class="classNames" @click="onClick()">
    <code>background-color:blue/{{ opacity }}</code>
  </button>
</template>

<script>
const classNames = [
  'bg:fade-5/.8',
  'bg:fade-13/.6:hover',
  'bg:gray-87/.5@dark',
  'bg:gray-87:hover@dark',
  'r:3',
  'px:7',
  'f:mono',
  'h:1.5rem',
  'f:12',
  'f:fade-76',
  'f:gray-34@dark',
  'cursor:pointer',
  'outlined'
].join(' ')

export default {
  name: 'OpacityButton',
  props: {
    opacity: {
      type: String,
      default: '.5'
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  },
  data: () => {
    return {
      classNames
    }
  }
}
</script>
