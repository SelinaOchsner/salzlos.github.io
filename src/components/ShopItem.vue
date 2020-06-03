<template>
  <div class="shop-item" @click="toggleDetails">
    <img :src="imageUrl" :alt="name" />
    <div class="shop-description">
      <span class="left">{{ name }}</span>
      <span class="right">{{ price }}</span>
    </div>
    <div class="slot-text">
      <slot></slot>
    </div>
    <div v-if="showDetails" class="shop-item-details" @click="toggleDetails">
      <div class="details-image" :style="style"></div>
      <div class="details-description">
        <h1>{{ name }}</h1>
        Price: {{ price }}
        <br />
        <br />
        <div class="details-slot">
          <slot></slot>
        </div>
        <Button @clicked="store.addItem(name)">
          <fa-icon icon="shopping-bag" size="lg" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "ShopItem",
  components: {
    Button,
  },
  props: ["imageUrl", "name", "price", "store"],
  data: function() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggleDetails: function(event) {
      event.stopPropagation();
      this.showDetails = !this.showDetails;
    },
  },
  computed: {
    style: function() {
      return 'background-image: url("' + this.imageUrl + '")';
    },
  },
};
</script>

<style lang="sass" scoped>
.shop-item
  width: 450px
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
  // display: inline-flex
  // flex-direction: row
  // align-items: center
  // justify-content: space-around
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
  .details-slot
    display: inline-block
    position: absolute
    bottom: 50px
    left: calc(50% + 50px)
    right: 50px
</style>
