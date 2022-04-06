<template>
  <div>
    <ContentHeader />
    <div :class="MAIN_CONTENT">
      <SideMenu current-menu="animations" />
      <Animations />
    </div>
  </div>
</template>

<script>
import ContentHeader from '../../components/Header/ContentHeader.vue'
import SideMenu from '../../components/SideMenu/SideMenu.vue'
import Animations from '../../components/Animations/Animations.vue'
import { MAIN_CONTENT } from '../../classes/mainContent'

export default {
  name: 'AnimationsPage',
  components: {
    ContentHeader,
    SideMenu,
    Animations
  },
  data: () => {
    return {
      MAIN_CONTENT
    }
  }
}
</script>
