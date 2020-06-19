import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart";
import products from "./modules/products";

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    cart,
    products,
  },
  strict: debug,
  plugins: [
    createPersistedState({
      paths: ["cart"],
    }),
  ],
});
