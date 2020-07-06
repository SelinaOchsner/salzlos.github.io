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
            <fa-icon
              class="button"
              @click="removeProductFromCart(product)"
              icon="times"
              size="lg"
            />
          </td>
        </tr>
      </table>

      <PayPal
        v-if="!isEmpty"
        :amount="totalPrice.toString()"
        currency="EUR"
        env="sandbox"
      ></PayPal>
    </div>
  </div>
</template>

<script>
import PayPal from 'vue-paypal-checkout';

import Button from './Button';

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShoppingCart',
  components: {
    Button,
    PayPal,
  },
  methods: {
    ...mapActions('cart', ['removeProductFromCart']),
  },
  computed: {
    ...mapGetters('cart', {
      products: 'cartProducts',
      totalPrice: 'cartTotalPrice',
    }),
    ...mapState({
      isLoaded: (state) => state.products.isLoaded,
    }),
    isEmpty() {
      return this.products < 1;
    },
  },
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
.button
  opacity: 0.8
</style>
