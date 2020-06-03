import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Salzlos from "./components/Salzlos.vue";
import Shop from "./components/Shop.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingBag);

Vue.component("fa-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Salzlos },
  { path: "/shop", component: Shop },
];
const mode = "history";

const router = new VueRouter({ routes, mode });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
