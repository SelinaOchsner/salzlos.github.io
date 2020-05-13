<template>
  <div id="app">
    <Salzlos v-if="store.state.view === 'main'" :store="store" />
  </div>
</template>

<script>
import Salzlos from "./components/Salzlos.vue";

const store = {
  debug: 1,
  state: {
    view: "main",
    showWorkpiece: 0,
  },
  settings: {
    workpieces: 2,
  },
  nextWorkpiece: function() {
    if (this.debug) console.log("Next workpiece triggered...");
    this.state.showWorkpiece =
      (this.state.showWorkpiece + 1) % (this.settings.workpieces + 1);
  },
};

// window.setInterval(() => store.nextWorkpiece(), 100);

export default {
  name: "App",
  components: {
    Salzlos,
  },
  data: function() {
    return {
      store,
    };
  },
};
</script>

<style>
/* vietnamese */
@font-face {
  font-family: "Anton";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Anton Regular"), local("Anton-Regular"),
    url(https://fonts.gstatic.com/s/anton/v11/1Ptgg87LROyAm3K8-C8CSKlvPfE.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Anton";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Anton Regular"), local("Anton-Regular"),
    url(https://fonts.gstatic.com/s/anton/v11/1Ptgg87LROyAm3K9-C8CSKlvPfE.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Anton";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Anton Regular"), local("Anton-Regular"),
    url(https://fonts.gstatic.com/s/anton/v11/1Ptgg87LROyAm3Kz-C8CSKlv.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: "Anton", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
</style>
