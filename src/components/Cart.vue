<template>
  <div id="shopping-cart">
    <Button id="return-button" @clicked="$router.push({ path: '/shop' })">
      <fa-icon icon="times" size="lg" />
    </Button>
    <span v-if="isLoaded && isEmpty">Your shopping cart is empty.</span>
    <div id="shopping-cart-products" v-if="isLoaded">
      <table>
        <tr v-for="product in products" :key="product.name">
          <td>
            <img :src="product.thumbnail" alt="X" />
          </td>
          <td>{{ product.name }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.price }}EUR</td>
          <td>
            <fa-icon class="button" @click="removeProductFromCart(product)" icon="times" size="lg" />
          </td>
        </tr>
      </table>
      <br />
      <div id="order-button" @click="processOrder">
        <b>O R D E R</b>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    Button
  },
  methods: {
    processOrder() {
      window.location.href = `mailto:info@salzlos.berlin?subject=order&body=${this.cartOrderString}`;
    },
    ...mapActions("cart", ["checkout", "removeProductFromCart"])
  },
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      cartOrderString: "cartOrderString",
      totalPrice: "cartTotalPrice"
    }),
    ...mapState({
      isLoaded: state => state.products.isLoaded
    }),
    isEmpty() {
      return this.products < 1;
    }
  },
  data: function() {
    return {
      credentials: {
        sandbox:
          "AUP2GZHM-a8ezi1eUrZfF93Hmrbiusi6e9UYx7_d5QJNix7h7ImOxj6VNozS1hYuYxFqE1FrvGXRPN7n"
      }
    };
  }
};
</script>

<style lang="sass" scoped>
#shopping-cart
  display: inline-flex
  position: relative
  width: calc(80% - 100px)
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
#return-button
  position: absolute
  top: 0px
  right: 0px
  margin-top: 10px
#order-button
  display: inline-block
  border: 2px solid black
  padding: 2px 10px 2px 10px
.button
  opacity: 0.8
</style>
