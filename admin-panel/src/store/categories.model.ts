import {action,computed,observable} from 'mobx';
import axios from "axios";


interface Category{
	id: string,
	name: string
}


export default class CategoriesModel {

	@observable categories: Array<Category> = [];

	
	@action.bound async fetchCategories(){
		this.categories = [];
		const response = await axios.get("http://localhost:3500/categories");
		response.data.forEach((category:any)=>{
			this.categories.push({
				id: category._id,
				name: category.name
			});
		});
			
	}
	@computed get getCategories(){
		return this.categories;
	}
}