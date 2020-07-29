<template>
  <div id="shopping-cart">
    <Button id="return-button" @clicked="$router.push({ path: '/shop' })">
      <fa-icon icon="times" size="lg" />
    </Button>
    <span v-if="isLoaded && isEmpty">Your shopping cart is empty.</span>
    <div id="shopping-cart-products" v-if="isLoaded">
      <div class="shopping-cart-product" v-for="product in products" :key="product.name">
        <div>
          <img :src="product.thumbnail" width="100px" alt="X" />
        </div>
        <div style="width: 200px;">{{ product.name }}</div>
        <div>{{ product.quantity }}</div>
        <div>{{ product.price }}</div>
        <div @click="removeProductFromCart(product)">
          <fa-icon icon="times" size="lg" />
        </div>
      </div>
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
    Button,
  },
  methods: {
    processOrder() {
      window.location.href = `mailto:info@selinasalzlos.berlin?subject=order&body=${this.cartOrderString}`;
    },
    ...mapActions("cart", ["checkout", "removeProductFromCart"]),
  },
  computed: {
    ...mapGetters("cart", {
      products: "cartProducts",
      cartOrderString: "cartOrderString",
      totalPrice: "cartTotalPrice",
    }),
    ...mapState({
      isLoaded: (state) => state.products.isLoaded,
    }),
    isEmpty() {
      return this.products < 1;
    },
  },
  data: function () {
    return {
      credentials: {
        sandbox:
          "AUP2GZHM-a8ezi1eUrZfF93Hmrbiusi6e9UYx7_d5QJNix7h7ImOxj6VNozS1hYuYxFqE1FrvGXRPN7n",
      },
    };
  },
};
</script>

<style lang="sass" scoped>
#shopping-cart
  display: inline-flex
  position: relative
  width: calc(80% - 30px)
  padding-top: 30px
  padding-bottom: 30px
  padding-left: 30px
  flex-direction: row
  justify-content: flex-start
  color: black
  background-color: white
  font-family: "letter-gothic-std"
#shopping-cart-products
  width: 80%
  margin-top: 30px
  margin-bottom: 30px
.shopping-cart-product
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: center
  img
    display: inline-block
#return-button
  position: absolute
  top: 0px
  right: 0px
  margin-top: 10px
#order-button
  position: absolute
  bottom: 20px
  right: 100px
  border: 2px solid black
  padding: 2px 10px 2px 10px
.button
  opacity: 0.8
</style>
