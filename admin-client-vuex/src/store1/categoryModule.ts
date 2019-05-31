import {api} from "@/api/api"
import {CategoryModel,CategoryResource} from "@/types";
import Field from './field';
import { observable } from 'mobx';


export default class CategoryModule {
	

	id: string;

	@observable
	name: Field<string>;

	constructor(){
		this.name = new Field();
	}


	
	saveCategory() : Promise<CategoryResource>{
		return api.categories.createCategory({name:this.name.value});
	}

}