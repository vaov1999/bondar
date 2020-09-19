<template>
  <div class="sidebar-f">
    <div
      @click="$store.commit('toggleVisibleSidebarFilter')"
      class="sidebar-f__close"
    ></div>
    <aside class="sidebar-f__wrap">
      <Slider />
      <Filters />
    </aside>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
import Filters from "@/components/Filters";
export default {
  name: "SidebarFilter",
  components: { Slider, Filters }
};
</script>

<style lang="sass">
.sidebar-f
  position: fixed
  display: flex
  height: 100%
  width: 100%
  z-index: 100
  top: 0
  right: 0

.sidebar-f__wrap
  background: #ddd
  width: 300px
  padding: 10px
  overflow: auto
  color: #222222

.sidebar-f__close
  display: flex
  height: 100vh
  flex-grow: 2
  background: rgba(0, 0, 0, 0.5)
</style>
