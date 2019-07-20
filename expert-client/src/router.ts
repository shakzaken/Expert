import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyCart from "./views/MyCart.vue";
import MyOrders from "./views/MyOrders.vue";
import Login from "./views/Login.vue";
import Store from './store/store';
const store = new Store();

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
			component: Home,
			props: {store:store}
    },
    {
      path: '/my-cart',
      name: 'myCart',
		  component: MyCart,
		  props:{store:store}
		},
		{
			path:"/my-orders",
			name:"myOrders",
			component: MyOrders,
			props: {store:store}
		},
		{
      path:"/login",
      name:"Login",
      component: Login,
      props: {store:store}
		}
  ]
})
