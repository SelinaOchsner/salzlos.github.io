<template>
  <div class="button" :class="{ highlighted: isHighlighted }" @click="clicked">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button",
  data: function() {
    return {
      isHighlighted: false,
    };
  },
  methods: {
    clicked: function(event) {
      event.stopPropagation();
      this.$emit("clicked");
      this.isHighlighted = true;
      window.setTimeout(
        function() {
          this.isHighlighted = false;
        }.bind(this),
        150
      );
    },
  },
};
</script>

<style lang="sass" scoped>
$size: 50px
$border-size: 0.2rem

.button
  display: inline-flex
  position: relative
  opacity: 0.8
  flex-direction: row
  align-items: center
  justify-content: space-around
  margin-right: 2rem
  margin-left: 2rem
  width: $size
  height: $size
  border-width: $border-size
  border-style: solid
  border-color: black
.highlighted
  background-color: white
  border-color: black
  opacity: 1
</style>
