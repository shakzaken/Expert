<template>
  <div id="app">
    <panel/>
  </div>
</template>

<script lang="ts">
import panel from "./pages/panel.vue";
import Vue from "vue";

export default Vue.extend({
  name: 'app',
  components: {
    panel
  }
})
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}

#app {
  font-family: 'Quicksand', sans-serif;
  box-sizing: border-box;
  font-size: 1.7rem;
  font-weight: 500;
  
}
html{
  font-size: 62.5%;
}

</style>
