<template>
  <div id="shop" class="black">
    <SalzlosLogo @clicked="$router.push({ path: '/' })" />
    <router-view></router-view>
    <div class="footer">
      <span @click="$router.push({ path: '/shop/impressum' })">Impressum</span>
      <span @click="$router.push({ path: '/shop/datenschutz' })"
        >Datenschutz</span
      >
      <span @click="$router.push({ path: '/shop/kontakt' })">Kontakt</span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import SalzlosLogo from './SalzlosLogo';

export default {
  name: 'Shop',
  components: {
    SalzlosLogo,
  },
  computed: mapState({
    products: (state) => state.products.all,
  }),
  created: function() {
    this.$store.dispatch('products/getAllProducts');
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
.black
  background-color: #f1ddcf
.salzlos-logo
  padding-top: 50px
  padding-bottom: 50px
  margin-left: 10%
  font-size: 1.5em
  transform: scaleY(2) scale(2)
  transform-origin: 25% 40%
  color: white
.footer
  display: flex
  flex-direction: row
  justify-content: space-around
  margin-top: 25px
  text-decoration: underline
@media only screen and (max-width: 1000px)
  .salzlos-logo
    transform: scale(0.78,1.5)
    transform-origin: -20% 50%
    padding: 0px
    width: 100%
</style>
