
<template>
	<div class="card">
		<div class="image">
			<img :src="item.imageUrl" alt="image">
		</div>
		<p class="title">{{item.bookName}}</p>
		<div v-if="item.quantity === 0" class="button" >
			<el-button @click="addQuantity" size="small" plain round>Buy Now!</el-button>
		</div>
		<div v-if="item.quantity !== 0" class="icons">
			<span class="minus"><i @click="decreaseQuantity" class="el-icon-remove-outline" /></span>
			<span class="counter">{{item.quantity}}</span>
			<span class="plus"><i @click="addQuantity" class="el-icon-circle-plus-outline" /></span>
		</div>
	</div>
</template>




<script lang="ts">
import Vue from 'vue';
import {Observer} from "mobx-vue";
import {Prop,Component} from 'vue-property-decorator';
import { Item } from '../store/store';



@Observer
@Component({

})
export default class Card extends Vue {
	@Prop() item: Item;

	addQuantity(){
		this.$emit("addQuantity", this.item.bookId);
	}
	decreaseQuantity(){
		this.$emit("decreaseQuantity", this.item.bookId);
	}
	
}
</script>


<style lang="scss" scoped>

	.card{
		background-color: #f4f4f4;
		height: 250px;
		width:160px;
		border: 2px solid rgb(162, 0, 255);
		box-sizing: content-box;
		box-shadow: 2px 3px 5px rgb(180, 180, 180);
		display: flex;
		flex-direction: column;
		.image{
			flex:6;
			img{
				width:100%;
				height: 100%;
			}
			
			
		}
		.title{
			flex:2;
			margin-top:10px;
			font-weight: 600;
			text-align: center;
			padding: 0 10px;
		}
		.button{
			flex:2;
			padding: 10px 35px;
			.el-button {
				border:1.5px solid rgb(162, 0, 255);
				color: rgb(162, 0, 255);
				font-weight: 600;
			}
		}

		.icons{
			flex:2;
			background-color: rgb(255, 227, 232);
			display: flex;
			.minus{
				flex:1;
				display: flex;
				justify-content: center;
				align-items: center;
				.el-icon-remove-outline{
					font-size:30px;
					color: rgb(162, 0, 255);
					cursor: pointer;
				}
			}
			.plus{
				flex:1;
				display: flex;
				justify-content: center;
				align-items: center;
				.el-icon-circle-plus-outline{
					cursor: pointer;
					font-size:30px;
					color: rgb(162, 0, 255);
				}
			}
			.counter{
				padding-top:15px;
				font-size: 20px;
				font-weight: 800;
			}
		}
	}
</style>
