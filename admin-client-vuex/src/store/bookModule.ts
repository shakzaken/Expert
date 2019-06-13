import {observable, computed, action} from "mobx";
import Field from "./field";
import {api} from "@/api/api";
import {BookResource,BookModel, CategoryModel} from "@/types";
import {Required,MaxLength,MinLength} from "@/store/validators";

export default class BookModule {

	@observable 
	id:string;

	@observable
	loading: boolean;
	
	@observable
	name:Field<string>;

	@observable
	description:Field<string>;

	@observable
	imageUrl:Field<string>;

	@observable
	categoryId:Field<string>;

	@observable.ref
	categories:CategoryModel[] = [];


	constructor(){
		this.loading = false;
		this.name = new Field(null,[Required,MinLength(3),MaxLength(255)]);
		this.description = new Field(null,[Required,MinLength(5),MaxLength(512)]);
		this.imageUrl = new Field(null,[Required,MinLength(5),MaxLength(512)]);
		this.categoryId = new Field(null,[Required]);
	}

	@computed
	get editState(){
		return !!this.id;
	}


	@computed
	get getBookDataForApi() : BookResource {
		const bookResource : BookResource = {
			name: this.name.value,
			description: this.description.value,
			imageUrl: this.imageUrl.value,
			categoryId: this.categoryId.value
		};
		return bookResource;
	}

	@action.bound
	async setEditState(id: string){
		this.loading = true;
		const bookResource : BookModel = await api.books.getBook(id);
		this.setBookData(bookResource);
		this.loading = false;
	}
	@action.bound
	setBookData(book:BookModel) : void {
		this.id = book.id;
		this.name.setValue(book.name);
		this.imageUrl.setValue(book.imageUrl);
		this.description.setValue(book.description);
		this.categoryId.setValue(book.categoryId);
	}
	@action.bound
	async fetchCategories(){
		this.categories = await api.categories.getCategories();
	}

	@action.bound
	clearBookForm(){
		this.id = null;
		this.name.clearField();
		this.imageUrl.clearField();
		this.description.clearField();
		this.categoryId.clearField();
	}

	saveBookForm() : Promise<BookResource> {
		if(this.editState){
			return this.updateBookForm();
		}else{
			return this.createBookForm();
		}
	}


	async createBookForm() : Promise<BookResource>{
		const bookResource : BookResource = this.getBookDataForApi;
		return api.books.createBook(bookResource);
	}

	async updateBookForm() : Promise<BookResource>{
		const bookResource : BookResource = this.getBookDataForApi;
		return api.books.updateBook(this.id,bookResource);
	}


}