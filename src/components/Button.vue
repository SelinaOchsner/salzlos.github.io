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
      isHighlighted: false
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
    }
  }
};
</script>

<style lang="sass" scoped>
$size: 40px
$border-size: 3px

.button
  display: inline-flex
  position: relative
  flex-direction: row
  align-items: center
  justify-content: space-around
  margin-right: 2rem
  margin-left: 2rem
  min-width: $size
  min-height: $size
  border-width: $border-size
  border-style: solid
  border-color: black
  background-color: white
  color: #000000cc
.highlighted
  color: #000000ff
</style>
