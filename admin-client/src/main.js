import Vue from 'vue';
import App from './App.vue';
import router from "./routes";
import axios from "axios";
import store from "./store/store";


console.log(process.env.VUE_APP_SERVER_URL);
axios.defaults.baseURL = process.env.VUE_APP_SERVER_URL;


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
