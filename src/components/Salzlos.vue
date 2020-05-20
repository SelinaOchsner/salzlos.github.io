<template>
  <div id="salzlos" :class="{ colorized: isColorized, black: isBlack }" @click="nextWorkpiece()">
    <div v-if="viewIndex == 0" id="main-header" class="noselect">
      <h2 class="s0 noselect">SELINA SALZLOS</h2>
    </div>
    <Workpiece v-if="viewIndex == 1" />
    <Workpiece v-if="viewIndex == 2" />
  </div>
</template>

<script>
import Workpiece from "./Workpiece.vue";

export default {
  name: "Salzlos",
  components: {
    Workpiece
  },
  data: function() {
    return {
      viewIndex: 0,
      totalViews: 3
    };
  },
  computed: {
    isColorized: function() {
      return this.viewIndex <= 1;
    },
    isBlack: function() {
      return !this.isColorized;
    }
  },
  methods: {
    nextWorkpiece: function() {
      this.viewIndex = (this.viewIndex + 1) % this.totalViews;
    }
  }
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
  color: white
#main-header
  display: flex
  flex-direction: row
  justify-content: space-around
  align-items: flex-end
  transform: scaleX(3.5) scaleY(2)
#main-header h2
  display: block
  font-size: 3em
  margin: 0
.s0
  transform: scaleY(3)
.s1
  transform: scaleY(2)
.colorized
  background-image: url("../assets/bg.jpg")
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
</style>
