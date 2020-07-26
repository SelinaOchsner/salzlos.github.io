<template>
  <div class="shop-item" @click="showDetails(product)">
    <img :src="url" :alt="product.name" height="300px" />
    <div class="shop-description">
      <span class="left">{{ product.name }}</span>
      <span class="right">{{ product.price }}</span>
    </div>
    <div class="slot-text">{{ product.description }}</div>
    <div
      v-if="showDetailsForId == product.id"
      class="shop-item-details"
      @click.stop="hideDetails(product)"
    >
      <div class="details-image" :style="style"></div>
      <div class="details-description">
        <h1>{{ product.name.toUpperCase() }}</h1>
        <hr />
        Price: {{ product.price }}
        <br />
        <br />
        <div class="details-slot">{{ product.description }}</div>
        <Button class="button-close" @clicked="hideDetails(product)">
          <fa-icon icon="times" size="lg" />
        </Button>
        <Button class="button-bag" @clicked="addProductToCart(product)">
          <fa-icon icon="shopping-bag" size="lg" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Button from "./Button";

export default {
  name: "ShopItem",
  components: {
    Button,
  },
  props: ["product"],
  methods: {
    toggleDetails: function (event) {
      event.stopPropagation();
      this.showDetails = !this.showDetails;
    },
    ...mapActions("cart", ["addProductToCart"]),
    ...mapActions("products", ["showDetails", "hideDetails"]),
  },
  computed: {
    style: function () {
      return `background-image: url(" ${this.url} ")`;
    },
    url: function () {
      return this.product.imageUrl;
    },
    ...mapGetters("products", {
      showDetailsForId: "showDetailsForId",
    }),
  },
};
</script>

<style lang="sass" scoped>
.shop-item
  width: 400px
  padding: 50px
  margin: 50px
  border: 2px solid black
  font-family: "letter-gothic-std"
  text-align: left
  background-color: white
  .shop-description
    display: flex
    flex-direction: row
    justify-content: space-between
    &span
      display: inline-block
  .slot-text
    width: 400px
    font-size: 0.7em
    line-height: 8px
  &img
    width: 400px
    height: 300px
.shop-item-details
  position: fixed
  top: 15%
  left: 15%
  width: calc(70% - 10px)
  height: 70%
  background-color: white
  border: 5px solid black
  // padding: 100px
  &img
    width: calc(50% - 100px)
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
</style>
