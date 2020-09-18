<template>
  <div class="salzlos-logo" @click="clickHandler">
    <div>
      <span class="horizontal noselect">SELINA SALZLOS</span>
      <span class="vertical noselect">berlin</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalzlosLogo",
  methods: {
    clickHandler() {
      this.$emit("clicked");
    },
  },
};
</script>

<style lang="sass" scoped>
.salzlos-logo
  width: 400px
  text-align: left
  white-space: nowrap
.horizontal
  font-size: 3em
  margin: 0
.vertical
  margin-left: 4px
  font-family: "letter-gothic-std", monospace
  font-size: 0.7em
  writing-mode: vertical-lr
</style>
