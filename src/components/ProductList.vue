<template>
  <div id="product-list">
    <ShopItem
      v-for="product in products"
      :key="product.name"
      :product="product"
    />
  </div>
</template>

<script>
import ShopItem from "./ShopItem";

import { mapState } from "vuex";

export default {
  name: "ProductList",
  components: {
    ShopItem,
  },
  computed: mapState({
    products: (state) => state.products.all,
  }),
  created: function() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>

<style lang="sass" scoped>
#product-list
  display: inline-flex
  width: 80%
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  color: black
  background-color: white
</style>
