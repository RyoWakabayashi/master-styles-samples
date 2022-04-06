<template>
  <router-link
    :class="linkClass"
    :to="'/' + route"
  >
    <div class="lines:1 break-word" style="white-space: nowrap;">
      {{ label }}
    </div>
  </router-link>
</template>

<script>
const classNames = [
  'block:not([hidden])',
  'r:5 px:12',
  'lh:1.5rem',
  'f:14',
  'f:fade-68',
  'f:gray-45@dark',
  'f:fade-92:hover',
  'f:gray-12:hover@dark',
  'f:bold.active',
  'f:black.active',
  'f:gray-12.active@dark',
  'bg:fade-5:hover:not(.active)',
  'bg:gray-87:hover:not(.active)@dark',
  'contain:content'
].join(' ')

export default {
  name: 'side-menu-item',
  props: {
    label: {
      type: String,
      default: ''
    },
    route: {
      type: String,
      default: ''
    },
    currentMenu: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      classNames
    }
  },
  computed: {
    linkClass () {
      return this.classNames + ' ' + (this.currentMenu === this.route ? 'active' : '')
    }
  }
}
</script>
