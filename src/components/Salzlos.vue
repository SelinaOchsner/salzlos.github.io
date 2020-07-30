<template>
  <div id="salzlos" :class="{ colorized: isColorized, black: isBlack }" @click="nextView()">
    <SalzlosLogo v-if="viewIndex == 0" />
    <SalzlosView v-if="viewIndex == 1" />
    <SalzlosView v-if="viewIndex == 2" />
  </div>
</template>

<script>
import SalzlosView from "./SalzlosView.vue";
import SalzlosLogo from "./SalzlosLogo.vue";

export default {
  name: "Salzlos",
  components: {
    SalzlosView,
    SalzlosLogo,
  },
  data: function () {
    return {
      viewIndex: 0,
      totalViews: 3,
    };
  },
  computed: {
    isColorized: function () {
      return this.viewIndex <= 1;
    },
    isBlack: function () {
      return !this.isColorized;
    },
  },
  methods: {
    nextView: function () {
      if (++this.viewIndex == this.totalViews) {
        this.viewIndex = 0;
        this.$router.push({ path: "shop" });
      }
    },
  },
};
</script>

<style lang="sass" scoped>
#salzlos
  position: fixed
  height: 100%
  width: 100%
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-around
  color: black
.header
  font-size: 3em
  margin: 0
.colorized
  background-repeat: no-repeat
  background-size: 100% 100%
.black
  background-color: white
  background-size: 100% 100%
.noselect
  -webkit-touch-callout: none
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
.salzlos-logo
  transform: scaleX(3.5) scaleY(6)
</style>
