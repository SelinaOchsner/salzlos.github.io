<template>
  <div class="Salzlos">
    <div id="main-header">
      <h2 class="s0">SELINA SALZLOS</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Salzlos"
};
</script>

<style scoped>
#main-header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  transform: scaleX(3.5) scaleY(2);
}
#main-header h2 {
  display: block;
  font-size: 3em;
  margin: 0;
}

.s0 {
  transform: scaleY(3);
}

.s1 {
  transform: scaleY(2);
}
</style>