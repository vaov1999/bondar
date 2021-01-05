<template>
  <v-app>
    <NavBar />
    <SidebarMobile v-if="$store.state.togglers.isVisibleSidebarMobile" />
    <main>
      <Nuxt />
    </main>
  </v-app>
</template>

<style lang="scss">
@import 'material-design-icons-iconfont/dist/material-design-icons.css';
@import '@/assets/clear.css';

main {
  margin-top: 55px;
  color: rgba(0, 0, 0, 0.87);
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
