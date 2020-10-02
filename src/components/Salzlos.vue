<template>
  <div id="salzlos" :class="{ colorized: isColorized, black: isBlack }" @click="startShow()">
    <SalzlosLogo v-if="viewIndex == 0" />
    <div id="salzlos-view-container">
      <SalzlosView v-if="viewIndex == 1" />
      <SalzlosView v-if="viewIndex == 2" />
    </div>
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
      timeout: 800,
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
    startShow: function() {
      this.nextView()
    },
    nextView: function () {
      if (++this.viewIndex == this.totalViews) {
        this.viewIndex = 0;
        this.$router.push({ path: "shop" });
      } else {
        setTimeout(this.nextView, this.timeout)
      }
    },
  },
};
</script>

<style lang="sass" scoped>
#salzlos
  padding: 50px
  width: calc(100% - 100px)
  height: calc(100% - 100px)
#salzlos-view-container
  position: absolute
  top: 0px
  left: 0px
  bottom: 0px
  right: 0px
  display: flex
  flex-direction: row
  align-items: center
  justify-content: space-around
.header
  font-size: 3em
  margin: 0
.colorized
  background-image: url("../assets/bg.jpg")
  background-repeat: no-repeat
  background-size: cover
  background-position: 50% 50%
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
  transform: translate(50%, 66%) scale(2, 3)
@media only screen and (max-width: 1000px)
  .salzlos-logo
    transform: translate(0, 33%) scale(1, 1.5)
</style>
