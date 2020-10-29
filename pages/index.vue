<template>
  <div class="home">
    <SidebarDesktop />
    <SidebarFilter v-if="$store.state.isVisibleSidebarFilter" />
    <div class="content">
      <div v-if="false" style="display: block !important">
        <Carousel />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
}
.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
