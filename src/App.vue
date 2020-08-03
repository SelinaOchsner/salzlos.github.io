<template>
  <div id="app" class="noselect">
    <!-- <Salzlos v-if="store.state.view === 'main'" :store="store" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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

@import url("https://p.typekit.net/p.css?s=1&k=fxz7yuv&ht=tk&f=14582&a=16950649&app=typekit&e=css");

@font-face {
  font-family: "letter-gothic-std";
  src: url("https://use.typekit.net/af/7676e3/000000000000000000012e1b/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3")
      format("woff2"),
    url("https://use.typekit.net/af/7676e3/000000000000000000012e1b/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3")
      format("woff"),
    url("https://use.typekit.net/af/7676e3/000000000000000000012e1b/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3")
      format("opentype");
  font-display: auto;
  font-style: normal;
  font-weight: 700;
}

.tk-letter-gothic-std {
  font-family: "letter-gothic-std", monospace;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  display: none;
}

.noselect {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: "Anton", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
