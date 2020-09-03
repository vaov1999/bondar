import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isVisibleSidebar: false,
    isVisibleSidebarDesktop: true,
    isModalVisible: true,
    isModalTab: false
  },
  mutations: {
    toggleVisibleModal(state) {
      state.isModalVisible = !state.isModalVisible;
    },
    toggleHiddenModal(state) {
      state.isModalTab = !state.isModalTab;
    },
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
