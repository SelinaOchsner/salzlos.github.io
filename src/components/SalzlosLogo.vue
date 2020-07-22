<template>
  <div class="salzlos-logo" @click="$router.push({ path: '/' })">
    <span class="horizontal noselect">SELINA SALZLOS</span>
    <span class="vertical noselect">berlin</span>
  </div>
</template>

<script>
export default {
  name: "SalzlosLogo"
};
</script>

<style lang="sass" scoped>
.salzlos-logo
  text-align: left
.horizontal
  font-size: 3em
  margin: 0
.vertical
  margin-left: 4px
  font-family: "letter-gothic-std", monospace
  font-size: 0.7em
  writing-mode: vertical-lr
</style>
