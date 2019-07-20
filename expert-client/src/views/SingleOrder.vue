<template>
	<div class="single-order">
		<ul v-for="item in order.items" :key="item.id">
			<li>
				{{item.bookName}} * {{item.quantity}}
			</li>
		</ul>
	</div>
</template>


<script lang="ts">
import Vue from 'vue'
import {Observer} from "mobx-vue";
import {Component,Prop} from "vue-property-decorator";
import Store, { Order } from '../store/store';




@Observer
@Component({})
export default class SingleOrder extends Vue {
	@Prop() order: Order;
	

}


</script>


<style lang="scss" scoped>
	.single-order{

		margin: 20px 0;
		li{
			padding:5px;
			list-style: none;
		}
	}
</style>
