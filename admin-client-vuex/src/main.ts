import Vue from 'vue';
import App from './App.vue';
import router from "./router";
/*
    Change Auth header
*/
import useAxios from "./axios";
import store from "./store";
import useElementUi from "./element_ui";

useAxios();
useElementUi();



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
