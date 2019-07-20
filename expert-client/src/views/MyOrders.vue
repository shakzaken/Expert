<template>
	<div class="my-orders">
		<h2 class="title">My Orders</h2>


		 <el-timeline :reverse="true">
			<el-timeline-item
			v-for="(order, index) in store.orders"
			:key="index"
			:timestamp="order.date">
				<single-order :order="order" />
			</el-timeline-item>
		</el-timeline>


	</div>
</template>



<script lang="ts">
import Vue from 'vue'
import {Observer} from "mobx-vue";
import {Component,Prop} from "vue-property-decorator";
import Store from '../store/store';
import SingleOrder from "./SingleOrder.vue";



@Observer
@Component({
	components: {SingleOrder}
})
export default class MyOrders extends Vue {
	@Prop() store: Store;
	created(){
		this.store.fetchOrders();
		const date = Date.now();
		
	}

}



</script>


<style lang="scss" scoped>
	.my-orders{
		padding: 50px 200px;
		.title{
			margin-bottom: 50px;
		}
	}
</style>
