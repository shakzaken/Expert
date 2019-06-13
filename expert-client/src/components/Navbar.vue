<template>
	<nav class="navbar">
		<ul class="title">
			<span class="title-inner">
				<router-link to="/">Expert</router-link>	
			</span>	
		</ul>
		<ul class="links">
			<li class="link">
				<router-link to="/my-cart">
					<a>My Cart</a>
				</router-link>
			</li>
			<li class="link">
				<router-link to="my-orders">
					<a>My Orders</a>
				</router-link>
			</li>
		</ul>
	</nav>
</template>




<script lang="ts">
import Vue from 'vue';
import {Observer} from "mobx-vue";
import {Prop,Component} from 'vue-property-decorator';



@Observer
@Component({

})
export default class Navbar extends Vue {

	
}
</script>


<style lang="scss" scoped>
	.navbar{
		height:60px;
		background-color: rgb(204, 0, 255);
		border-bottom:2px solid rgb(125, 6, 161);
		display: flex;

		.title{
			flex:1;
			font-size: 20px;
			font-weight: 600;
			text-decoration: none;
			padding-top:15px;
			a{
				text-decoration: none;
				color:white;
			}
			.title-inner{
				
				margin-left:40%;
			}
		}
		.links{
			flex:1;
			display:flex;
			align-items: center;
			justify-content: flex-start;
			list-style: none;
			.link{
				text-decoration: none;
				margin-left:30px;
				a{
					color:white;
				}
			}
		}
	}
</style>

