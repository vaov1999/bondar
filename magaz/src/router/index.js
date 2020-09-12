import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/product/:id",
      components: require("../components/Test.vue")
    }
  ]
});

export default router;
