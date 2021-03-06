import { observable, action, computed, toJS } from 'mobx';
import { CategoryResource, CategoryModel } from '@/types';
import { api } from '@/api/api';





export default class CategoriesList{

	@observable.ref
	categoriesList : CategoryModel[] = [];

	constructor(){

	}


	@action.bound
	async fetchCategories(){
		this.categoriesList = await api.categories.getCategories();
	}

	@action.bound
	async deleteCategory(id: string){
		await api.categories.deleteCategory(id);
		this.fetchCategories();
	}

	@computed
	get list() : CategoryModel[] {
		return this.categoriesList.map(category => toJS(category));
	}
}
