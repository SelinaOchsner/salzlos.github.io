<template>
  <div id="shop" class="colorized">
    <SalzlosLogo />
    <ShoppingCart />
    <ProductList />
  </div>
</template>

<script>
import { mapState } from "vuex";

import SalzlosLogo from "./SalzlosLogo";
import ShoppingCart from "./Cart";
import ProductList from "./ProductList";

export default {
  name: "Shop",
  components: {
    SalzlosLogo,
    ShoppingCart,
    ProductList,
  },
  computed: mapState({
    products: (state) => state.products.all,
  }),
};
</script>

<style lang="sass" scoped>
#shop
  padding-bottom: 100px
.colorized
  background-image: url("../assets/bg.jpg")
  background-repeat: no-repeat
  background-size: 100% 100%
  background-attachment: fixed
.salzlos-logo
  padding-top: 50px
  padding-bottom: 50px
  margin-left: 10%
  font-size: 1.5em
  transform: scaleY(2)
</style>
