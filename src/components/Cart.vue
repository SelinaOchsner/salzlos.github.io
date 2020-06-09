<template>
  <div id="shopping-cart">
    <ul>
      <li v-for="product in products" :key="product.name">
        <pre>
          {{ product.name }} &#9; {{ product.quantity }} &#9; {{
            product.price
          }}
        </pre>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      totalPrice: "cartTotalPrice",
    }),
  },
};
</script>

<style lang="sass" scoped>
#shopping-cart
  color: black
  background: white
  border: 2px solid black
  list-style-type: none
  ul
    list-style-type: none
</style>
