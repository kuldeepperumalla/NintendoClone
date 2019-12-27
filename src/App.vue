<template>
  <div id="app">
    <nav-bar />
    <main-section />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import navBar from "./components/navBar.vue";
import mainSection from "./components/mainSection.vue";
export default Vue.extend({
  name: "App",
  components: {
    navBar,
    mainSection
  }
});
</script>

<style lang="css">
html {
  scroll-behavior: smooth;
}
body {
  overflow-y: auto;
  font-family: "proxima-nova-condensed", "Source Sans Pro", Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.1px;
  background-color: #f4f4f4;
  -webkit-text-decoration-skip: ink;
  text-decoration-skip: ink;
  margin: 0;
}
::-webkit-scrollbar {
  width: 10px;
  margin: 0;
}
::-webkit-scrollbar-thumb {
  border-radius: 0.5px;
  background: grey;
}
</style>