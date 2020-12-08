<template>
  <div
    class="shop-item"
    @click="$router.push({ path: '/shop/product/' + product.id })"
  >
    <img :src="url" :alt="product.name" width="600px" />
    <div class="shop-description">
      <span class="left">{{ product.name }}</span>
      <span class="right">{{ product.price }}</span>
    </div>
    <div class="slot-text">{{ product.description }}</div>
    <div
      v-if="$route.params.product_id == product.id"
      class="shop-item-details"
      @click.stop="$router.push({ path: '/shop' })"
    >
      <div class="details-image" :style="style"></div>
      <div class="details-description">
        <h1>{{ product.name.toUpperCase() }}</h1>
        <hr />
        Price: {{ product.price }}
        <br />
        <br />
        <div class="details-slot">{{ product.description }}</div>
        <Button class="button-close" @clicked="$router.push({ path: '/shop' })">
          <fa-icon icon="times" size="lg" />
        </Button>
        <Button class="button-bag" @clicked="bagCallback(product)">
          <fa-icon icon="shopping-bag" size="lg" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Button from './Button';

export default {
  name: 'ShopItem',
  components: {
    Button,
  },
  props: ['product'],
  methods: {
    toggleDetails: function(event) {
      event.stopPropagation();
      this.showDetails = !this.showDetails;
    },
    ...mapActions('cart', ['addProductToCart']),
    ...mapActions('products', ['showDetails', 'hideDetails']),
    bagCallback(product) {
      this.addProductToCart(product);
      this.$confirm('Das Stück ist jetzt im Warenkorb', 'Nice', 'Success', {
        confirmButtonText: 'zum Warenkorb',
        cancelButtonText: 'weiter einkaufen',
      }).then(() => this.$router.push({ path: '/shop/cart' }));
    },
  },
  computed: {
    style: function() {
      return `background-image: url(" ${this.url} ")`;
    },
    url: function() {
      return this.product.imageUrl;
    },
    ...mapGetters('products', {
      showDetailsForId: 'showDetailsForId',
    }),
  },
};
</script>

<style lang="sass" scoped>
$border-width: 3px
.shop-item
  width: 600px
  // padding: 50px
  margin: 100px 50px 150px 50px
  // border: $border-width solid black
  font-family: "letter-gothic-std"
  text-align: left
  font-size: 2.2em
  // background-color: white
  .shop-description
    display: flex
    flex-direction: row
    justify-content: space-between
    line-height: 50px
    &span
      display: inline-block
  .slot-text
    width: 600px
    font-size: 0.8em
    line-height: 30px
    text-align: justify
  &img
    width: 500px
    height: 380px
.shop-item-details
  position: fixed
  top: 15%
  left: 15%
  width: calc(70% - #{2 * $border-width})
  height: 70%
  background-color: white
  border: $border-width solid black
  // padding: 100px
  &img
    width: calc(50% - 100px)
  font-size: 0.6em
.details-image
  display: inline-block
  width: 50%
  height: 100%
  background-repeat: no-repeat
  background-size: cover
  background-position: 50% 50%
.details-description
  display: inline-block
  width: calc(50% - 100px)
  height: calc(100% - 100px)
  vertical-align: top
  padding: 50px
  h1
    font-size: 40px !important
  hr
    border: black solid 1px
  .details-slot
    display: inline-block
    position: absolute
    bottom: 50px
    left: calc(50% + 50px)
    right: 50px
.button-close
  position: absolute
  top: 0px
  margin: 10px
  right: 0px
.button-bag
  margin: 0px
@media only screen and (max-width: 1000px)
  $border-width: 3px
  .shop-item
    width: 100%
    padding: 25px
    margin: 0px
    border-width: $border-width
    img
      width: 100%
      height: auto
    .slot-text
      width: 100%
      font-size: 0.7em
      line-height: 25px
  .shop-item-details
    top: 10px
    left: 10px
    width: calc(100% - 20px - #{2 * $border_width})
    height: calc(100% - 20px - #{2 * $border_width})
    border-width: $border-width
  .details-image
    width: 100%
    height: 50%
  .details-description
    width: calc(100% - 100px)
    height: calc(50% - 100px)
    padding: 10px
    font-size: 12px
    .button
      min-width: 30px
      min-height: 30px
    h1
      font-size: 25px !important
    .details-slot
      left: calc(50% + 10px)
      right: 10px
      bottom: 20px
</style>
