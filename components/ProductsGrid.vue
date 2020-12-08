<template>
  <div>
    <Chips></Chips>
    <div class="grid">
      <v-sheet
        v-if="$fetchState.pending"
        style="display: flex; justify-content: center; flex-wrap: wrap"
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
        v-for="(product, index) in this.$store.state.products"
        :key="index"
        :to="{ path: '/product/' + product.id }"
        style="text-decoration: none !important; color: inherit !important"
      >
        <v-tooltip bottom min-width="220">
          <template v-slot:activator="{ on, attrs }">
            <div class="card" v-bind="attrs" v-on="on">
              <v-img
                class="card__img"
                aspect-ratio="1"
                src="/print.jpg"
              ></v-img>
              <div class="card__content">
                <h3 class="card__title">Декоративний заєць</h3>
                <div class="card__price-line">
                  <span>250 <span style="font-size: 12px">грн</span></span>
                  <div
                    v-show="true"
                    class="card__availability card__availability--response"
                  >
                    <span style="color: rgb(63, 214, 82)">Є у наяві</span>
                    <v-icon color="rgb(63,214,82)" style="padding-left: 7px"
                      >check_circle_outline</v-icon
                    >
                  </div>
                  <div
                    v-show="false"
                    class="card__availability card__availability--response"
                  >
                    <span>Під заказ</span>
                    <v-icon style="padding-left: 7px">event</v-icon>
                  </div>
                  <v-btn icon class="card__buy-btn"
                    ><v-icon>add_shopping_cart</v-icon></v-btn
                  >
                </div>
              </div>
            </div>
          </template>
          <div>
            <h3 style="text-align: center">Декоративний заєць</h3>
            <h4>
              {{ true ? 'Есть в наличии' : 'Под заказ' }}
            </h4>
            <h4>Категория товара: Доска</h4>
            <h4>Способ фиксации: На магнитах</h4>
            <h4>Вид росписи: Петреківський розпис</h4>
          </div>
        </v-tooltip>
      </router-link>
      <div v-if="products.length === 0">
        нажаль у нас нема роботи яку ви шукаєте(
      </div>
    </div>
  </div>
</template>

<script>
const url = 'http://localhost:1337/products'
export default {
  fetch() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => this.$store.commit('fetchProducts', res))
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.products = this.$store.state.products
  },
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
  grid-gap: 20px;
  width: 100%;
  justify-content: center;
  height: 100%;
  padding: 20px;
}
.card {
  box-shadow: rgb(0, 0, 0, 0.3) 5px 5px 10px;
  border-radius: 15px;
}
.card__img {
  flex-grow: 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.card__content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card__title {
  padding: 0 15px;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
}
.card__hr {
  height: 1px;
  background: rgb(0, 0, 0, 0.3);
  width: 80%;
  margin: 10px auto;
}
.card__availability {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px !important;
  padding-bottom: 5px;
}
.card__availability {
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  opacity: 0.7;
}
.card__price-line {
  padding: 10px 0 0 0;
  height: 40px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__buy-btn {
  background: rgba(155, 241, 146, 0.5) !important;
}
.card__availability--response {
  display: none;
}
.v-tooltip__content {
  background: rgb(0, 0, 0);
}

@media screen and (max-width: 735px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 500px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .card__availability,
  .card__hr {
    display: none;
  }
  .card__availability--response {
    display: flex;
    font-size: 12px;
  }
}
</style>
