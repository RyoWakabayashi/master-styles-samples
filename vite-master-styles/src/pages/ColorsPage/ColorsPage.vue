<template>
  <div>
    <ContentHeader />
    <div :class="MAIN_CONTENT">
      <SideMenu current-menu="colors" />
      <Colors />
    </div>
  </div>
</template>

<script>
import ContentHeader from "../../components/Header/ContentHeader.vue"
import SideMenu from "../../components/SideMenu/SideMenu.vue"
import Colors from "../../components/Colors/Colors.vue"
import { MAIN_CONTENT } from "../../classes/mainContent.js"

export default {
  name: 'colors-page',
  components: {
    ContentHeader,
    SideMenu,
    Colors
  },
  data: () => {
    return {
      MAIN_CONTENT
    }
  }
}
</script>
