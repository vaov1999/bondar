<template>
  <aside v-if="$store.state.product.isVisibleSidebarDesktop" class="sidebar">
    <div class="sidebar__social">
      <a class="sidebar__social-link v-btn">
        <img src="../assets/icons/instagram.svg" alt="Instagram" />
      </a>
      <a class="sidebar__social-link v-btn">
        <img src="../assets/icons/facebook.svg" alt="Facebook" />
      </a>
      <a class="sidebar__social-link v-btn">
        <img src="../assets/icons/youtube.svg" alt="Youtube" />
      </a>
      <a class="sidebar__social-link v-btn">
        <img src="../assets/icons/telegram.svg" alt="Telegram" />
      </a>
      <a class="sidebar__social-link v-btn">
        <img src="../assets/icons/viber.svg" alt="Viber" />
      </a>
      <a class="sidebar__social-link v-btn">
        <img src="../assets/icons/kyivstar.svg" alt="Kyivstar" />
      </a>
      <a class="sidebar__social-link v-btn">
        <img src="../assets/icons/vodafone.svg" alt="Vodafone" />
      </a>
    </div>

    <h2 class="sidebar__title-filter">
      Фильтр продукиции<v-icon>filter_list</v-icon>
    </h2>

    <Slider />

    <v-expansion-panels multiple style="padding: 20px 0">
      <v-expansion-panel>
        <v-expansion-panel-header>
          По наличию
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group>
            <v-radio
              v-for="i in $store.state.product.availabilityMode"
              :key="i.title"
              :label="i.title"
              @click="$store.commit('toggleAvailabilityMode', i.title)"
            ></v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Сортировать по
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          цене
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Виды произведений</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-checkbox
            hide-details="true"
            v-for="product in $store.state.product.categories"
            :key="product.getter"
            :label="product.title"
            v-model="product.isChosen"
            @click="$store.commit('toggleFilter', product.title)"
          ></v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Виды росписи</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-checkbox
            hide-details="true"
            v-for="product in $store.state.product.prints"
            :key="product.getter"
            :label="product.title"
            v-model="product.isChosen"
            @click="$store.commit('toggleFilter', product.title)"
          ></v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>Способы фиксации</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-checkbox
            hide-details="true"
            v-for="product in $store.state.product.fixation"
            :key="product.getter"
            :label="product.title"
            v-model="product.isChosen"
            @click="$store.commit('toggleFilter', product.title)"
          ></v-checkbox>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </aside>
</template>

<script>
import gql from "graphql-tag";
import Slider from "@/components/Slider";
export default {
  name: "SidebarDesktop",
  components: { Slider },
  data() {
    return {
      products: []
    };
  },
  apollo: {
    products: {
      query: gql`
        query Products {
          products {
            categories
          }
        }
      `
    }
  }
};
</script>

<style lang="sass">
.sidebar
  width: 300px
  padding: 10px
  color: rgb(0,0,0, 0.7)
  flex-shrink: 0

.sidebar__social
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
  padding: 10px
  border-radius: 5px
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
  margin: 10px 0 20px

.sidebar__social-link
  height: 100%
  display: flex
  flex-grow: 1

.sidebar__social img
  width: 20px
  height: 20px

.sidebar__filter__item
  padding: 3px 5px 3px 15px

.sidebar__range
  width: 100%

.sidebar__title-filter
  text-align: center
  padding-bottom: 20px
  font-size: 20px

.v-input--selection-controls
  margin-top: 0 !important
  padding-top: 10px !important

.v-expansion-panel-content__wrap
  padding: 0 10px 16px 15px !important

.v-expansion-panel-header
  padding: 0 10px 0 15px !important

@media screen and (max-width: 1000px)
  .sidebar
    display: none
</style>
