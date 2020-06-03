<template>
  <div id="shop" class="colorized">
    <SalzlosLogo />
    <ShoppingCart :store="store" />
    <div id="shop-content">
      <ShopItem
        image-url="http://via.placeholder.com/400x300"
        name="placeholder"
        price="120"
        :store="store"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet
        lacus eu purus hendrerit, in bibendum libero rutrum. Aenean rhoncus eros
        in libero iaculis, non commodo ex gravida. Pellentesque vitae tincidunt
        metus. Maecenas posuere gravida faucibus.
      </ShopItem>
      <ShopItem
        image-url="http://via.placeholder.com/400x300"
        name="placeholder"
        price="120"
      />
      <ShopItem
        image-url="http://via.placeholder.com/400x300"
        name="placeholder"
        price="120"
      />
      <ShopItem
        image-url="http://via.placeholder.com/400x300"
        name="placeholder"
        price="120"
      />
      <ShopItem
        image-url="http://via.placeholder.com/400x300"
        name="placeholder"
        price="120"
      />
      <ShopItem
        image-url="http://via.placeholder.com/400x300"
        name="placeholder"
        price="120"
      />
    </div>
  </div>
</template>

<script>
import ShopItem from "./ShopItem.vue";
import SalzlosLogo from "./SalzlosLogo.vue";
import ShoppingCart from "./Cart.vue";

const store = {
  debug: 1,
  state: {
    cart: {},
  },
  addItem: function(item) {
    if (this.debug) {
      console.log("Add item to cart: " + item);
    }
    if (item in this.state.cart) {
      this.state.cart[item] += 1;
    } else {
      this.state.cart[item] = 1;
    }
  },
  removeItem: function(item) {
    if (this.debug) {
      console.log("Remove item from cart: " + item);
    }
    if (!(item in this.state.cart)) {
      console.log(item + "not in cart.");
    } else if (this.state.cart[item] > 1) {
      this.state.cart[item]--;
    } else if (this.state.cart) {
      delete this.state.cart[item];
    }
  },
};

export default {
  name: "Shop",
  components: {
    ShopItem,
    SalzlosLogo,
    ShoppingCart,
  },
  data: function() {
    return {
      store,
    };
  },
};
</script>

<style lang="sass" scoped>
// #shop
//   padding-top: 10%
#shop-content
  display: inline-flex
  width: 80%
  flex-direction: row
  flex-wrap: wrap
  justify-content: center
  color: black
  background-color: white
.colorized
  background-image: url("../assets/bg.jpg")
  background-repeat: no-repeat
  background-size: 100% 100%
  background-attachment: fixed
.salzlos-logo
  padding-top: 50px
  padding-bottom: 50px
  margin-left: 10%
  font-size: 1.5em
  transform: scaleY(2)
</style>
