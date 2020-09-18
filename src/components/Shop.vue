<template>
  <div id="shop" class="colorized">
    <SalzlosLogo @clicked="$router.push({ path: '/' })" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";

import SalzlosLogo from "./SalzlosLogo";

export default {
  name: "Shop",
  components: {
    SalzlosLogo,
  },
  computed: mapState({
    products: (state) => state.products.all,
  }),
  created: function () {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>

<style lang="sass" scoped>
#shop
  padding-bottom: 100px
  min-height: calc(100% - 100px)
.colorized
  background-image: url("../assets/bg.jpg")
  background-repeat: no-repeat
  background-size: cover
  background-position: 50% 50%
  background-attachment: fixed
.salzlos-logo
  padding-top: 50px
  padding-bottom: 50px
  margin-left: 10%
  font-size: 1.5em
  transform: scaleY(2)
@media only screen and (max-width: 1000px)
  .salzlos-logo
    transform: translateX(-25%) scale(0.5, 1)
    padding: 0px
    width: 100%
</style>
