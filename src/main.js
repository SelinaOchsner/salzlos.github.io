import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Salzlos from './components/Salzlos';
import Shop from './components/Shop';
import ProductList from './components/ProductList';
import ShoppingCart from './components/Cart';
import VueSimpleAlert from 'vue-simple-alert';

import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faShoppingBag,
  faShoppingCart,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAnalytics from 'vue-analytics';

library.add(faShoppingBag, faShoppingCart, faTimes);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueSimpleAlert);

const routes = [
  { path: '/', component: Salzlos },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '',
        component: ProductList,
      },
      {
        path: 'product/:product_id',
        component: ProductList,
      },
      {
        path: 'cart',
        component: ShoppingCart,
      },
    ],
  },
];
const mode = 'history';

const router = new VueRouter({ routes, mode });

Vue.use(VueAnalytics, {
  id: 'UA-179626235-1',
  router,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
