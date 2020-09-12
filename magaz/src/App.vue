<template>
  <v-app>
    <NavBar />
    <SidebarMobile v-if="$store.state.isVisibleSidebar"></SidebarMobile>
    <main>
      <router-view />
    </main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SidebarMobile from "./components/SidebarMobile";

export default {
  components: { SidebarMobile, NavBar: NavBar }
};
</script>

<style lang="sass">
@import "./styles/clear.css"

main
  margin-top: 55px
  color: rgba(0, 0, 0, 0.87)

@media screen and (max-width: 600px)
  main
    margin-top: 110px
</style>
