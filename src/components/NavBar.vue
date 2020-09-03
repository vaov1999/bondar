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
      <v-btn class="nav__button nav__search-btn">
        <span>Поиск</span>
        <v-icon>search</v-icon>
      </v-btn>
      <v-text-field
        class="nav__search"
        label="Поиск"
        append-icon="search"
      ></v-text-field>

      <div class="nav__links">
        <router-link class="nav__link" to="/">Автор</router-link>
        <router-link class="nav__link" to="/">Заказать</router-link>
        <router-link class="nav__link" to="/">Контакты</router-link>
        <router-link class="nav__link" to="/">Помощь</router-link>
      </div>

      <v-btn class="nav__button nav__btn-response">
        <span>Сетка</span>
        <v-icon>view_list</v-icon>
      </v-btn>
      <v-btn class="nav__button nav__btn-response">
        <span>Фильтр</span>
        <v-icon>filter_list</v-icon>
      </v-btn>
      <v-btn class="nav__button nav__btn-response">
        <span>Сортировка</span>
        <v-icon>sort</v-icon>
      </v-btn>
      <v-btn class="nav__button">
        <span>Корзина</span>
        <v-icon>shopping_basket</v-icon>
      </v-btn>
    </v-bottom-navigation>

    <v-bottom-navigation class="nav__buttons-addition">
      <v-btn class="nav__button">
        <span>Сетка</span>
        <v-icon>view_list</v-icon>
      </v-btn>
      <v-btn class="nav__button">
        <span>Фильтр</span>
        <v-icon>filter_list</v-icon>
      </v-btn>
      <v-btn class="nav__button">
        <span>Сортировка</span>
        <v-icon>sort</v-icon>
      </v-btn>
      <div class="nav__sort-type">От дешёвых</div>
    </v-bottom-navigation>
  </nav>
</template>

<script>
import { filters } from "../data/filters";
export default {
  name: "Nav",
  data() {
    return {
      filters: filters,
      isVisibleSidebar: true
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

.nav__buttons-addition
  display: none !important
  position: fixed !important
  top: 55px
  left: 0
  width: 100% !important
  justify-content: space-around !important
  height: 55px !important

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

.nav__search
  margin: 0 !important
  padding: 12px 20px 0 !important

.nav__link:hover
  text-decoration: underline

.burger-mobile, .nav__btn-response, .nav__search-btn
  display: none !important

@media only screen and (max-width: 1000px)
  .burger-mobile, .nav__search-btn, .nav__btn-response
    display: block !important

  .burger-desk, .nav__links, .nav__search
    display: none !important


@media only screen and (max-width: 600px)
  .nav__buttons-addition
    display: flex !important

  .nav__search
    display: block !important

  .nav__btn-response, .nav__search-btn
    display: none !important


@media only screen and (max-width: 425px)
  .nav__search
    display: none !important

  .nav__search-btn
    display: block !important
</style>
