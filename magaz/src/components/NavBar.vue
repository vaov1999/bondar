<template>
  <nav class="nav">
    <v-app-bar-nav-icon
      class="burger-mobile"
      @click="$store.commit('toggleSidebar')"
    ></v-app-bar-nav-icon>

    <v-app-bar-nav-icon
      class="burger-desk"
      @click="$store.commit('toggleSidebarDesktop')"
    ></v-app-bar-nav-icon>

    <v-bottom-navigation class="nav__buttons">
      <v-btn class="nav__button">
        <span>Главная</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn
        class="nav__button nav__response-btn"
        @click="$store.commit('toggleVisibleSidebarFilter')"
      >
        <span>Фильтр</span>
        <v-icon>filter_list</v-icon>
      </v-btn>
      <v-btn
        class="nav__button nav__search-btn"
        @click="$store.commit('toggleVisibleSearchBar')"
      >
        <span>Поиск</span>
        <v-icon>search</v-icon>
      </v-btn>

      <v-text-field
        class="nav__search-input"
        label="Поиск"
        append-icon="search"
        v-model="searchString"
        @input="$store.commit('changeSearchString', searchString)"
      ></v-text-field>

      <div class="nav__links">
        <router-link class="nav__link" to="/">Автор</router-link>
        <router-link class="nav__link" to="/">Заказать</router-link>
        <router-link class="nav__link" to="/">Контакты</router-link>
        <router-link class="nav__link" to="/">Помощь</router-link>
      </div>

      <v-btn class="nav__button">
        <span>Корзина</span>
        <v-icon>shopping_basket</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <div class="nav__search-bar" v-if="$store.state.isVisibleSearchBar">
      <v-text-field
        label="Поиск"
        append-icon="search"
        v-model="searchString"
        @input="$store.commit('changeSearchString', searchString)"
      ></v-text-field>
      <v-btn
        style="margin-left: 10px;"
        icon
        @click="$store.commit('toggleVisibleSearchBar')"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data: function() {
    return {
      searchString: ""
    };
  }
};
</script>

<style lang="sass">
.nav
  position: fixed
  height: 55px
  width: 100%
  display: flex
  align-items: center
  padding: 0 10px
  box-shadow: #999 0 0 10px
  background: #fff
  z-index: 2

.nav__buttons
  height: 100% !important
  box-shadow: none !important
  background: transparent !important
  justify-content: space-between !important
  padding: 0 10px !important

.nav__button
  padding: 0 5px !important

.nav__sort-type
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  padding: 10px
  color: rgba(0, 0, 0, 0.6)
  font: inherit
  vertical-align: baseline

.nav__links
  display: flex
  height: 100%
  width: 500px
  justify-content: space-between
  align-items: center
  padding: 0 20px 0 0

.nav__link
  display: flex
  justify-content: center
  align-items: center
  flex-grow: 1
  cursor: pointer
  height: 100%
  text-decoration: none
  color: rgba(0, 0, 0, 0.6) !important

.nav__search-input
  margin: 0 !important
  padding: 12px 20px 0 !important

.nav__link:hover
  text-decoration: underline

.burger-mobile, .nav__search-btn, .nav__response-btn
  display: none !important

.nav__search-bar
  display: flex
  justify-content: flex-end
  align-items: center
  position: fixed
  top: 70px
  right: 10px
  z-index: 1000
  background: #fff
  border-radius: 5px
  padding: 0 10px
  box-shadow: #999 0 0 10px

@media only screen and (max-width: 1000px)
  .nav__search-btn, .nav__response-btn
    display: block !important

  .burger-desk, .nav__search-input
    display: none !important

@media only screen and (max-width: 800px)
  .nav__links,.nav__search-btn, .nav__search-bar
    display: none !important

  .nav__search-input, .burger-mobile
    display: block !important

@media only screen and (max-width: 600px)
  .nav__button
    padding: 0 !important
    min-width: 50px !important

  .nav__buttons-addition, .nav__search-bar
    display: flex !important

  .nav__search-input, .nav__links
    display: none !important

  .nav__search-btn, .nav__response-btn
    display: block !important
</style>
