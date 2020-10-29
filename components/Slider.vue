<template>
  <v-range-slider
    v-model="range"
    class="slider"
    :min="min"
    :max="max"
    hide-details
  >
    <template v-slot:prepend>
      <span class="slider__title">Ціна починається з</span>
      <div style="display: flex; align-items: center">
        <v-text-field
          :value="range[0]"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
          @change="$set(range, 0, $event)"
        ></v-text-field>
        <span style="font-size: 12px; padding-left: 5px">грн</span>
      </div>
    </template>

    <template v-slot:append>
      <span class="slider__title">Та закінчюється на</span>
      <div style="display: flex; align-items: center">
        <v-text-field
          :value="range[1]"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
          @change="$set(range, 1, $event)"
        ></v-text-field>
        <span style="font-size: 12px; padding-left: 5px">грн</span>
      </div>
      <v-btn
        v-if="
          range[0] !== $store.state.product.minPrice ||
          range[1] !== $store.state.product.maxPrice
        "
        class="slider__accept"
        @click="$store.commit('changePrice', range)"
      >
        Прийняти параметри
      </v-btn>
    </template>
  </v-range-slider>
</template>

<script>
export default {
  name: 'Slider',
  data() {
    return {
      min: this.$store.state.product.minPrice,
      max: this.$store.state.product.maxPrice,
      slider: 40,
      range: [0, 2500],
    }
  },
}
</script>

<style lang="scss">
.slider {
  flex-direction: column;
  padding: 10px 20px 15px;
  border-radius: 5px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  margin: 0;
  background-color: #fff;
}

.slider__title {
  display: flex;
  align-items: center;
  padding-right: 5px;
}

.v-input__append-outer,
.v-input__prepend-outer {
  margin: 0 !important;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}

.slider__accept {
  width: 100%;
  background: rgba(155, 241, 146, 0.5) !important;
  margin-top: 15px;
  box-shadow: none;
  text-transform: none;
}

.v-slider--horizontal {
  margin: 15px 10px 10px !important;
}
</style>
