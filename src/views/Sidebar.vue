<template>
  <aside>
    <div class="contacts__phones">
      <div class="contacts__phone">
        <img src="" alt="mts" />
        <span>066 599 39 99</span>
      </div>
      <div class="contacts__phone">
        <img src="" alt="ks" />
        <span>066 599 39 99</span>
      </div>
      <div class="contacts__phone">
        <img src="" alt="life" />
        <span>066 599 39 99</span>
      </div>
    </div>
    <div class="social">
      <div class="social__link">1</div>
      <div class="social__link">2</div>
      <div class="social__link">3</div>
      <div class="social__link">4</div>
      <div class="social__link">5</div>
    </div>
    <div class="filters">
      <div class="price">
        <label class="price__title"
          >Цена
          <input type="number" />
        </label>
        <input type="range" min="1" max="2500" />
      </div>
      <div class="filter">
        <div class="filter__title">Виды произведений</div>
        <div
          class="filter__item"
          v-for="product in filters.productsTypes"
          :key="product"
        >
          {{ product }}
        </div>
      </div>
    </div>
    <div class="filter">
      <div class="filter__title">Виды росписи</div>
      <div
        class="filter__item"
        v-for="print in filters.printTypes"
        :key="print"
      >
        {{ print }}
      </div>
    </div>
    <div class="filter">
      <div class="filter__title">Виды древесны</div>
      <div class="filter__item" v-for="tree in filters.treeTypes" :key="tree">
        {{ tree }}
      </div>
    </div>
    <div class="filter">
      <div class="filter__title">Способы фиксации</div>
      <div
        class="filter__item"
        v-for="fixation in filters.fixationTypes"
        :key="fixation"
      >
        {{ fixation }}
      </div>
    </div>
    <div class="delivery">
      <div class="delivery__ways">шото там</div>
      <div class="delivery__ways">шото там</div>
      <div class="delivery__ways">шото там</div>
      <div class="delivery__ways">шото там</div>
    </div>
  </aside>
</template>

<script>
import { filters } from "../data/filters";
export default {
  name: "Home",
  data() {
    return {
      filters: filters,
      test: 123
    };
  }
};
</script>

<style lang="sass" scoped>
main
  display: flex
  justify-content: center
  width: 100%

aside
  flex-shrink: 0
  width: 250px
  border: solid red 2px

.contacts__phones
  padding: 10px
  border-bottom: solid #ddd 1px

.social
  display: flex
  padding: 10px
  border-bottom: solid #ddd 1px

.filter
  display: flex
  justify-content: flex-start
  flex-direction: column
  text-align: left
  border-bottom: solid #ddd 1px

.filter__title
  font-size: 20px
  padding: 10px 5px 5px 5px

.filter__item
  padding: 3px 5px 3px 15px
</style>
