<template>
  <div id="shopping-cart">
    <Button @clicked="$router.push({ path: '/shop' })">
      <fa-icon icon="times" size="lg" />
    </Button>
    <span v-if="products.length < 1">Your shopping cart is empty.</span>
    <table>
      <tr v-for="product in products" :key="product.name">
        <td>
          <img :src="product.thumbnail" :alt="product.name" />
        </td>
        <td>{{ product.name }}</td>
        <td>{{ product.quantity }}</td>
        <td>{{ product.price }}EUR</td>
        <td>
          <fa-icon
            @click="removeProductFromCart(product)"
            icon="times"
            size="lg"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Button from "./Button";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    Button,
  },
  methods: {
    ...mapActions("cart", ["removeProductFromCart"]),
  },
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      totalPrice: "cartTotalPrice",
    }),
  },
  created: function() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>

<style lang="sass" scoped>
#shopping-cart
  display: inline-flex
  position: relative
  width: calc(80% - 200px)
  padding-top: 30px
  padding-bottom: 30px
  padding-left: 100px
  flex-direction: row
  justify-content: flex-start
  color: black
  background-color: white
  font-family: "letter-gothic-std"
  img
    display: inline-block
  td, th
    padding: 0px 30px 0px 30px
    text-align: left
    img
      margin-right: 80px
.button
  position: absolute
  top: 0px
  right: 0px
  margin-top: 10px
</style>
