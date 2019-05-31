<template>
	<div>
		<h4>Categories List</h4>
		  <template>				
				<div v-for="category in categories" :key="category.id">
					<p>{{category.id}}</p>
					<p>{{category.name}}</p>
				</div>
				<el-table
					:data="this.state.getCategories | parse"
					style="width: 100%">
					<el-table-column
						prop="date"
						label="Date"
						width="180">
					</el-table-column>
					<el-table-column
						prop="name"
						label="Name"
						width="180">
					</el-table-column>
					<el-table-column
						prop="address"
						label="Address">
					</el-table-column>
				</el-table>
			
		</template>
		 
	</div>
</template>


<script lang="ts">


//import {Vue,Component,Prop} from "vue-property-decorator";
import CategoriesModel from "../../store/categories.model";
import {Observer} from 'mobx-vue';
import Component from 'vue-class-component';
import Vue from 'vue';
import _ from "lodash";


@Observer
@Component({
	filters:{
		parse(value: any){
			return JSON.parse(JSON.stringify(value));
		}
	}
})
export default class CategoriesList extends Vue {

	state = new CategoriesModel();
	async created(){
		this.state.fetchCategories();
	}
	
	categories(){
		const categories = this.state.getCategories;
		return JSON.parse(JSON.stringify(categories));
	}
}
</script>



