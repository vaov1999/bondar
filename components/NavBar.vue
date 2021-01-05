<template>
  <nav class="nav">
    <v-app-bar-nav-icon
      class="burger-mobile"
      @click="$store.commit('togglers/toggleSidebar')"
    ></v-app-bar-nav-icon>

    <v-app-bar-nav-icon
      class="burger-desk"
      @click="$store.commit('togglers/toggleSidebarDesktop')"
    ></v-app-bar-nav-icon>

    <v-bottom-navigation class="nav__buttons">
      <v-tabs class="nav__links">
        <v-tab>
          <router-link class="nav__link" to="/">Магазин</router-link>
        </v-tab>
        <v-tab>
          <router-link class="nav__link" to="/">Автор</router-link>
        </v-tab>
        <v-tab>
          <router-link class="nav__link" to="/">Заказать</router-link>
        </v-tab>
        <v-tab>
          <router-link class="nav__link" to="/">Контакты</router-link>
        </v-tab>
        <v-tab>
          <router-link class="nav__link" to="/">Помощь</router-link>
        </v-tab>
      </v-tabs>

      <v-btn class="nav__button nav__response-home">
        <span>Главная</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn
        class="nav__button nav__response-btn"
        @click="$store.commit('togglers/toggleVisibleSidebarFilter')"
      >
        <span>Фильтр</span>
        <v-icon>filter_list</v-icon>
      </v-btn>
      <v-btn
        class="nav__button nav__search-btn"
        @click="$store.commit('togglers/toggleVisibleSearchBar')"
      >
        <span>Поиск</span>
        <v-icon>search</v-icon>
      </v-btn>
      <v-text-field
        v-model="searchString"
        class="nav__search-input"
        label="Поиск"
        append-icon="search"
        @input="$store.commit('changeSearchString', searchString)"
      ></v-text-field>
      <v-btn class="nav__button">
        <span>Корзина</span>
        <v-icon>shopping_basket</v-icon>
      </v-btn>
    </v-bottom-navigation>
    <div v-if="$store.state.togglers.isVisibleSearchBar" class="nav__search-bar">
      <v-text-field
        v-model="searchString"
        label="Поиск"
        append-icon="search"
        @input="$store.commit('changeSearchString', searchString)"
      ></v-text-field>
      <v-btn
        style="margin-left: 10px"
        icon
        @click="$store.commit('togglers/toggleVisibleSearchBar')"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchString: '',
    }
  },
}
</script>

<style lang="scss">
.nav {
  position: fixed;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-shadow: #999 0 0 10px;
  background: #fff;
  z-index: 2;
}
.nav__buttons {
  height: 100% !important;
  box-shadow: none !important;
  background: transparent !important;
  justify-content: space-between !important;
  padding: 0 10px !important;
}
.nav__button {
  padding: 0 5px !important;
}
.nav__sort-type {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: rgba(0, 0, 0, 0.6);
  font: inherit;
  vertical-align: baseline;
}
.nav__links {
  display: flex;
  height: 100%;
  width: 500px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 0;
}
.nav__link {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6) !important;
}
.v-tabs-bar {
  height: 55px !important;
}
.nav__search-input {
  margin: 0 !important;
  padding: 12px 20px 0 !important;
  min-width: 300px;
}
.burger-mobile,
.nav__search-btn,
.nav__response-btn,
.nav__response-home {
  display: none !important;
}
.nav__search-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 70px;
  right: 10px;
  z-index: 1000;
  background: #fff;
  border-radius: 5px;
  padding: 0 10px;
  box-shadow: #999 0 0 10px;
}

@media only screen and (max-width: 1000px) {
  .nav__search-btn,
  .nav__response-btn {
    display: block !important;
  }
  .burger-desk,
  .nav__search-input {
    display: none !important;
  }
}

@media only screen and (max-width: 800px) {
  .nav__links,
  .nav__search-btn,
  .nav__search-bar {
    display: none !important;
  }
  .nav__search-input,
  .burger-mobile,
  .nav__response-home {
    display: block !important;
  }
}

@media only screen and (max-width: 600px) {
  .nav__button {
    padding: 0 !important;
    min-width: 50px !important;
  }
  .nav__buttons-addition,
  .nav__search-bar {
    display: flex !important;
  }
  .nav__search-input,
  .nav__links {
    display: none !important;
  }
  .nav__search-btn,
  .nav__response-btn {
    display: block !important;
  }
}
</style>
