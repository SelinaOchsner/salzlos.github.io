<template>
  <div class="salzlos-logo" @click="clickHandler">
    <svg
      class="salzlos-logo-svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 15"
      preserveAspectRatio="none"
    >
      <text x="0" y="14" fill="#ffffff" font-size="15">
        SELINA SALZLOS
      </text>
      <text
        x="90"
        y="1"
        fill="#ffffff"
        font-size="3.7"
        font-family="letter-gothic-std"
        style="writing-mode: vertical-lr;"
      >
        berlin
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SalzlosLogo',
  methods: {
    clickHandler() {
      this.$emit('clicked');
    },
  },
};
</script>

<style lang="sass" scoped>
// .salzlos-logo
//   width: 400px
//   text-align: left
//   white-space: nowrap
// .horizontal
//   font-size: 3em
//   margin: 0
// .vertical
//   margin-left: 4px
//   font-family: "letter-gothic-std", monospace
//   font-size: 0.7em
//   writing-mode:vertical-lr
</style>
