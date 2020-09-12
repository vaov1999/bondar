import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const vm = new Vue({
  data: {},
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");

window.vm = vm;
