<template>
  <div>
    <Chips></Chips>
    <div class="grid">
      <v-sheet
        v-if="$apollo.loading"
        style="display: flex; justify-content: center; flex-wrap: wrap;"
      >
        <v-skeleton-loader
          v-for="i in 24"
          :key="i"
          width="220"
          height="360"
          type="image, list-item-three-line"
          style="margin: 0 10px"
        >
        </v-skeleton-loader>
      </v-sheet>
      <router-link
        v-for="product in filtered"
        :to="{ path: '/product/' + product.id }"
        :key="product.id"
        style="text-decoration: none !important;"
      >
        <div class="card">
          <v-img
            class="card__img"
            aspect-ratio="1"
            :src="'http://localhost:1337' + product.mainPhoto.url"
          ></v-img>
          <div class="card__content">
            <h3 class="card__title">{{ product.title }}</h3>
            <div class="card__price-line">
              <span
                >{{ product.price }}
                <span style="font-size: 12px">грн</span></span
              >
              <v-btn class="card__buy-btn">Купить</v-btn>
            </div>
          </div>
        </div>
      </router-link>
      <div class="card">
        <h3>покищо це все, скоро будуть нові роботи</h3>
      </div>
      <div v-if="filtered.length === 0">
        нажаль у нас нема роботи яку ви шукаєте(
      </div>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";
import Chips from "@/components/Chips";
export default {
  name: "ProductsGrid",
  components: { Chips },
  data() {
    return {
      products: []
    };
  },
  computed: {
    filtered: function() {
      const store = this.$store;
      if (store.state.product.searchString.length > 0) {
        return this.products.filter(
          i =>
            i.title
              .toLowerCase()
              .trim()
              .indexOf(store.state.product.searchString) !== -1
        );
      } else {
        return this.products.filter(function(i) {
          return (
            (store.state.product.availabilityMode.all.isChosen ||
              (i.availability &&
                store.state.product.availabilityMode.available.isChosen) ||
              (!i.availability &&
                store.state.product.availabilityMode.notAvailable.isChosen)) &&
            i.price <= store.state.product.maxPrice &&
            i.price >= store.state.product.minPrice &&
            (store.getters.chosenCategories.length === 0 ||
              store.getters.chosenCategories.includes(i.categories)) &&
            (store.getters.chosenFixation.length === 0 ||
              store.getters.chosenFixation.includes(i.fixation)) &&
            (store.getters.chosenPrints.length === 0 ||
              store.getters.chosenPrints.includes(i.prints))
          );
        });
      }
    }
  },
  apollo: {
    products: gql`
      query Products {
        products {
          id
          availability
          title
          fixation
          categories
          price
          prints
          mainPhoto {
            url
          }
        }
      }
    `
  }
};
</script>

<style lang="sass" scoped>
.grid
  display: flex
  flex-wrap: wrap
  justify-content: center !important
  width: 100%
  height: 100%
  padding: 20px 0

.card
  width: 220px
  box-shadow: rgb(0,0,0, 0.2) 5px 5px 10px
  margin: 10px 10px
  border-radius: 15px

.card__img
  flex-grow: 0
  border-top-left-radius: 15px
  border-top-right-radius: 15px

.card__content
  box-shadow: white -5px 0 5px
  padding: 15px
  display: flex
  flex-direction: column
  justify-content: space-between

.card__title
  padding: 0 15px 10px
  font-size: 18px
  text-align: center
  color: rgb(0,0,0, 0.7)
  text-transform: capitalize

.card__availability
  display: flex
  justify-content: flex-end
  font-size: 14px
  opacity: 0.7

.card__price-line
  padding: 10px 0 0 0
  height: 40px
  font-size: 18px
  display: flex
  justify-content: space-between
  align-items: center

.card__buy-btn
  height: 30px !important
  padding: 0 10px !important
  box-shadow: none !important
  background: rgba(155, 241, 146, 0.5) !important
</style>
