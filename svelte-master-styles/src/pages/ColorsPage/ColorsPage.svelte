<script>
  import ContentHeader from "../../components/Header/ContentHeader.svelte"
  import SideMenu from "../../components/SideMenu/SideMenu.svelte"
  import Colors from "../../components/Colors/Colors.svelte"
  import { MAIN_CONTENT } from "../../classes/mainContent"
</script>

<div>
  <ContentHeader />
  <div class={MAIN_CONTENT}>
    <SideMenu currentMenu="colors" />
    <Colors />
  </div>
</div>
