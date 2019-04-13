import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import VueRouter from "vue-router";
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  router,
  
}).$mount('#app');
