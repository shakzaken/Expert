import {api} from "@/api/api"
import {CategoryModel,CategoryResource} from "@/types";
import Field from './field';
import { observable } from 'mobx';
import {Required,MinLength,MaxLength} from "./validators";

export default class CategoryModule {
	

	id: string;

	@observable
	name: Field<string>;

	constructor(){
		this.name = new Field(null,[Required,MinLength(3),MaxLength(255)]);
	}


	
	saveCategory() : Promise<CategoryResource>{
		return api.categories.createCategory({name:this.name.value});
	}

}