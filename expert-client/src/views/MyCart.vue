<template>
	<div class="my-cart">
		<h3 class="title">My Cart</h3>
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

	</div>
</template>



<script lang="ts">
import Vue from 'vue'
import {Observer} from "mobx-vue";
import {Component,Prop} from "vue-property-decorator";
import {Store} from '../store/store';




@Observer
@Component({})
export default class MyCart extends Vue {
	@Prop() store:Store;

}



</script>


<style lang="scss" scoped>

	.my-cart{
		padding: 50px 100px;
		.title{
			margin-left:20%;
			margin-bottom: 20px;
		}
	}

	img{
		width:100%;
		height:100%;
	}
</style>
