<template>
  <div class="grid">
    <div v-if="$apollo.loading">Loading...</div>
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
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "ProductsGrid",
  data() {
    return {
      products: []
    };
  },
  computed: {
    filtered: function() {
      const state = this.$store;
      return this.products.filter(function(i) {
        return (
          i.availability === state.state.product.availability &&
          i.price <= state.state.product.underPrice &&
          (state.getters.chosenCategories.length === 0 ||
            state.getters.chosenCategories.includes(i.categories)) &&
          (state.getters.chosenFixation.length === 0 ||
            state.getters.chosenFixation.includes(i.fixation)) &&
          (state.getters.chosenPrints.length === 0 ||
            state.getters.chosenPrints.includes(i.prints))
        );
      });
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
  margin: 15px
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
