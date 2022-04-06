<script>
  import ContentHeader from "../../components/Header/ContentHeader.svelte"
  import SideMenu from "../../components/SideMenu/SideMenu.svelte"
  import Animations from "../../components/Animations/Animations.svelte"
  import { MAIN_CONTENT } from "../../classes/mainContent"
</script>

<div>
  <ContentHeader />
  <div class={MAIN_CONTENT}>
    <SideMenu currentMenu="animations" />
    <Animations />
  </div>
</div>
