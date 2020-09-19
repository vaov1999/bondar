<template>
  <div class="home">
    <Sidebar />
    <SidebarFilter v-if="$store.state.isVisibleSidebarFilter" />
    <div class="content">
      <div v-if="false" style="display: block !important;">
        <Carousel />
      </div>
      <ProductsGrid />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/SidebarDesktop";
import SidebarFilter from "@/components/SidebarFilter";
import Carousel from "../components/Carousel";
import ProductsGrid from "@/components/ProductsGrid";
export default {
  name: "Home",
  components: { Sidebar, Carousel, ProductsGrid, SidebarFilter }
};
</script>

<style lang="sass" scoped>
.home
  display: flex

.content
  display: flex
  flex-direction: column
  width: 100%
</style>
