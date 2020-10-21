<template>
  <div id="shopping-cart">
    <Button id="return-button" @clicked="$router.push({ path: '/shop' })">
      <fa-icon icon="times" size="lg" />
    </Button>
    <span v-if="isLoaded && isEmpty">Your shopping cart is empty.</span>
    <div id="shopping-cart-products" v-if="isLoaded">
      <div class="shopping-cart-product" v-for="product in products" :key="product.name">
        <div>
          <img :src="product.thumbnail" alt="X" />
        </div>
        <div>{{ product.name }}</div>
        <div>{{ product.quantity }}</div>
        <div>{{ product.price }}</div>
        <div @click="removeProductFromCart(product)">
          <fa-icon icon="times" size="lg" />
        </div>
      </div>
      <br />
      <div id="order-button">
        <PayPal
          :amount="totalPrice.toString()"
          currency="EUR"
          :client="credentials"
          env="production"
          @payment-authorized="authorized"
          @payment-completed="completed"
          @payment-cancelled="cancelled">
        </PayPal>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
import PayPal from "vue-paypal-checkout";

import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "ShoppingCart",
  components: {
    Button,
    PayPal,
  },
  methods: {
    processOrder() {
      window.location.href = `mailto:info@selinasalzlos.berlin?subject=order&body=${this.cartOrderString}`;
    },
    ...mapActions("cart", ["checkout", "removeProductFromCart"]),
    authorized() { },
    completed() {
      this.products.map((product) => this.removeProductFromCart(product))
      this.$alert("The Payment has been completed! We will contact you shortly.")
    },
    cancelled() {
      this.$alert("Something went wrong with the payment! Please try again.")
    },
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
        production:
          "AT1gs-eLsg0hod8dhywetGAR-HIzayNqg8EtdTgWSLZIYvWhwevoJMnPdnF37UNB98CCT4WxGnxBtpIz",
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
    width: 100px
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
@media only screen and (max-width: 1000px)
  $padding: 10px
  #order-button
    right: 40px
  #shopping-cart
    width: 100%
    padding-top: 50px
    padding-left: $padding
    padding-right: $padding
  #shopping-cart-products
    width: calc(100% - #{2 * $padding})
    margin-top: 30px
    margin-bottom: 30px
    font-size: 14px
    img
      width: 80px
</style>
