import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MyCart from "./views/MyCart.vue";
import MyOrders from "./views/MyOrders.vue";
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
	 // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
	 component: MyCart,
	 props:{store:store}
	},
	{
		path:"/my-orders",
		name:"myOrders",
		component: MyOrders,
		props: {store:store}
	}
  ]
})
