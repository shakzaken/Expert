<template>
	<div class="my-cart">
		<h2 class="title">My Cart</h2>
		<div class="table">
			<el-table
				:data="store.itemsForCart"
				style="width: 100%">
				<el-table-column
					label="Image"
					width="120">
					<template slot-scope="scope">
						<img :src="scope.row.imageUrl" alt="">
					</template>
				</el-table-column>
				<el-table-column
					prop="bookName"
					label="Item Name"
					width="180">
				</el-table-column>
				<el-table-column
					prop="quantity"
					label="Quantity"
					width="180">
				</el-table-column>
			</el-table>
		</div>
		<div class="button-block">
			<el-button round @click="saveOrder">Save Order</el-button>
		</div>
	</div>
</template>



<script lang="ts">
import Vue from 'vue'
import {Observer} from "mobx-vue";
import {Component,Prop} from "vue-property-decorator";
import {Store} from '../store/store';
import { CartStore } from '../store/cart';




@Observer
@Component({})
export default class MyCart extends Vue {
	@Prop() store:CartStore;

	async saveOrder(){
		if(confirm("Are you sure you want to make this order?")){
			await this.store.saveOrder();
			this.$router.push("/");
		}
	}

}



</script>


<style lang="scss" scoped>

	.my-cart{
		padding: 50px 100px;
		display: inline-block;
		max-width:1000px;
		margin-left:20%;
	
		.title{
			margin-left:20%;
			margin-bottom: 20px;
		}
		.button-block{
			margin-top:20px;
			display:flex;
			justify-content: flex-end;
		}
	}

	img{
		width:100%;
		height:100%;
	}
</style>
