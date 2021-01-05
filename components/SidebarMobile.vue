<template>
  <div class="sidebar-m">
    <aside class="sidebar-m__wrap">
      <div class="sidebar-m__links">
        <v-btn class="sidebar-m__link-btn">
          <router-link class="sidebar-m__link" to="/">
            Главная
          </router-link>
        </v-btn>
        <v-btn class="sidebar-m__link-btn">
          <router-link class="sidebar-m__link" to="/">
            Автор
          </router-link>
        </v-btn>
        <v-btn class="sidebar-m__link-btn">
          <router-link class="sidebar-m__link" to="/">
            Заказать
          </router-link>
        </v-btn>
        <v-btn class="sidebar-m__link-btn">
          <router-link class="sidebar-m__link" to="/">
            Контакты
          </router-link>
        </v-btn>
        <v-btn class="sidebar-m__link-btn">
          <router-link class="sidebar-m__link" to="/">
            Помощь
          </router-link>
        </v-btn>
      </div>
      <div class="sidebar-m__contacts">
        <div class="sidebar-m__contact">
          <img class="sidebar-m__contact-svg" src="/icons/kyivstar.svg" alt="Kyivstar">
          <span style="flex-grow: 2">066 599 3999</span>
          <v-icon small>
            content_copy
          </v-icon>
        </div>
        <div class="sidebar-m__contact">
          <img class="sidebar-m__contact-svg" src="/icons/vodafone.svg" alt="Vodafone">
          <span style="flex-grow: 2">066 599 3999</span>
          <v-icon small>
            content_copy
          </v-icon>
        </div>
        <div class="sidebar-m__contact">
          <img class="sidebar-m__contact-svg" src="/icons/telegram.svg" alt="Telegram">
          <span style="flex-grow: 2">@hmbond</span>
          <v-icon small>
            content_copy
          </v-icon>
        </div>
        <div class="sidebar-m__contact">
          <img class="sidebar-m__contact-svg" src="/icons/viber.svg" alt="Viber">
          <span style="flex-grow: 2">066 599 7377</span>
          <v-icon small>
            content_copy
          </v-icon>
        </div>
        <div class="sidebar-m__contact">
          <img class="sidebar-m__contact-svg" src="/icons/facebook.svg" alt="Viber">
          <span style="flex-grow: 2">sdbond56</span>
          <v-icon small>
            content_copy
          </v-icon>
        </div>
        <div class="sidebar-m__contact">
          <img class="sidebar-m__contact-svg" src="/icons/youtube.svg" alt="Viber">
          <span style="flex-grow: 2">HMBond</span>
          <v-icon small>
            content_copy
          </v-icon>
        </div>
        <div class="sidebar-m__contact">
          <img class="sidebar-m__contact-svg" src="/icons/instagram.svg" alt="Viber">
          <span style="flex-grow: 2">sdBond</span>
          <v-icon small>
            content_copy
          </v-icon>
        </div>
      </div>
    </aside>
    <div class="sidebar-m-close" @click="$store.commit('togglers/toggleSidebar')" />
  </div>
</template>

<style lang="scss">
.sidebar-m__wrap {
  background: #ddd;
  width: 250px;
  padding: 10px;
  overflow: auto;
  color: #222222;
}

.sidebar-m {
  position: fixed;
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 55;
  top: 0;
  left: 0;
}

.sidebar-m-close {
  display: flex;
  height: 100vh;
  flex-grow: 2;
  background: rgba(0, 0, 0, 0.5);
}

.sidebar-m__links {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}

.sidebar-m__link-btn {
  margin-top: 10px;
}

.sidebar-m__link {
  display: block;
  color: rgba(0, 0, 0, 0.6) !important;
  text-decoration: none;
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.sidebar-m__contacts {
  background-color: #f5f5f5;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 10px;
  color: rgba(0, 0, 0, 0.6) !important;
}

.sidebar-m__contact {
  padding: 6px 5px;
  display: flex;
  align-items: center;
}

.sidebar-m__contact-svg {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}
</style>
