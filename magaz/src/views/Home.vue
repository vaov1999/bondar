<template>
  <div class="home">
    <Sidebar />
    <div style="display: flex; flex-direction: column; width: 100%">
      <div v-if="false" style="display: block !important;">
        <Carousel />
      </div>
      <ProductsGrid />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/SidebarDesktop";
import Carousel from "../components/Carousel";
import ProductsGrid from "@/components/ProductsGrid";
export default {
  name: "Home",
  components: { Sidebar, Carousel, ProductsGrid }
};
</script>

<style lang="sass" scoped>
.home
  display: flex
</style>
