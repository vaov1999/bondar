<template>
  <div class="home">
    <Sidebar />
    <div style="display: flex; flex-direction: column">
      <div v-if="false" style="display: block !important;">
        <Carousel />
      </div>
      <div class="grid">
        <div v-for="i in 12" :key="i" class="card">
          <v-img
            class="card__img"
            aspect-ratio="1"
            src="../assets/панно.jpg"
          ></v-img>
          <div class="card__content">
            <h3 class="card__title">рождество</h3>
            <div
              style="margin-bottom: 15px; opacity: 0.5; height: 1px; background: #999;"
            ></div>
            <div class="card__availability">
              <span style="color: green">Есть в наличии</span>
              <v-icon style="padding-left: 10px" color="green">
                check_circle_outline
              </v-icon>
            </div>
            <div style="flex-grow: 3"></div>
            <div class="card__price-line">
              <span>135 <span style="font-size: 12px">грн</span></span>
              <v-btn
                style="
              height: 30px;
              padding: 0 10px;
              box-shadow: none;
              background: rgba(155, 241, 146, 0.5);"
              >
                Купить
              </v-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/SidebarDesktop";
import Carousel from "../components/Carousel";
export default {
  name: "Home",
  components: {
    Sidebar: Sidebar,
    Carousel: Carousel
  }
};
</script>

<style lang="sass" scoped>
.home
  display: flex

.grid
  display: flex
  flex-wrap: wrap
  justify-content: center
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
</style>
