import Vue from 'vue';
import App from './App.vue';
import router from "./router";
/*
    Change Auth header
*/
import useAxios from "./axios";
import {store} from "./store";
import useElementUi from "./element_ui";
import  "element-ui/lib/theme-chalk/index.css";
useAxios();
//useElementUi();
import elementUI from "element-ui";

Vue.use(elementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  data: store

}).$mount('#app')
