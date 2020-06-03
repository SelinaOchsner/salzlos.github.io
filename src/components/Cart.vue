<template>
  <div id="shopping-cart">
    <ul>
      <li v-for="(amount, item) in store.state.cart" :key="item">
        <pre>{{ item }} &#9; {{ amount }}</pre>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: ["store"],
};
</script>

<style lang="sass" scoped>
#shopping-cart
  color: black
  background: white
  border: 2px solid black
  list-style-type: none
</style>
