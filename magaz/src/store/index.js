import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    product: {
      availability: true,
      underPrice: 10000,
      categories: [
        { getter: "sets", title: "Набори", isChosen: false },
        { getter: "panno", title: "Панно", isChosen: false },
        { getter: "doski", title: "Досщєчки", isChosen: false },
        { getter: "srezi", title: "Срези", isChosen: false },
        { getter: "solfetnizi", title: "Серветниці", isChosen: false },
        { getter: "eggs", title: "Яєчки", isChosen: false },
        { getter: "metreshki", title: "Матрешки", isChosen: false },
        { getter: "another", title: "Друге", isChosen: false }
      ],
      fixation: [
        { getter: "verevka", title: "На мотузках", isChosen: false },
        { getter: "magnit", title: "На магнітах", isChosen: false },
        { getter: "wholes", title: "Отверстія", isChosen: false },
        { getter: "another", title: "Друге", isChosen: false }
      ],
      prints: [
        { getter: "petrikovka", title: "Петриківка", isChosen: false },
        { getter: "hohloma", title: "Хохлома", isChosen: false },
        { getter: "gzel", title: "Гжель", isChosen: false },
        { getter: "another", title: "Друге", isChosen: false }
      ],
      isVisibleSidebar: false,
      isVisibleSidebarDesktop: true
    }
  },
  getters: {
    chosenCategories: function(state) {
      const array = [];
      state.product.categories
        .filter(i => i.isChosen)
        .forEach(i => array.push(i.getter));
      return array;
    },
    chosenFixation: function(state) {
      const array = [];
      state.product.fixation
        .filter(i => i.isChosen)
        .forEach(i => array.push(i.getter));
      return array;
    },
    chosenPrints: function(state) {
      const array = [];
      state.product.prints
        .filter(i => i.isChosen)
        .forEach(i => array.push(i.getter));
      return array;
    }
  },
  mutations: {
    toggleSidebar(state) {
      state.isVisibleSidebar = !state.isVisibleSidebar;
    },
    toggleSidebarDesktop(state) {
      state.isVisibleSidebarDesktop = !state.isVisibleSidebarDesktop;
    }
  },
  actions: {},
  modules: {}
});
