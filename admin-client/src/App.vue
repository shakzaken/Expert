<template>
  <div id="app">
    <panel/>
  </div>
</template>

<script>
import panel from "./pages/panel.vue";

export default {
  name: 'app',
  components: {
    panel
  }
}
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
  font-size: 1.6rem;
  
}
html{
  font-size: 62.5%;
}

</style>
