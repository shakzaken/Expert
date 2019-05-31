import {observable, computed, action} from "mobx";
import Field from "./field";
import {api} from "@/api/api";
import {BookResource,BookModel} from "@/types";


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


	constructor(){
		this.loading = false;
		this.name = new Field();
		this.description = new Field();
		this.imageUrl = new Field();
		this.categoryId = new Field();
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
		const bookResource : BookResource = await api.books.getBook(id);
		this.setBookData(bookResource);
		this.loading = false;
	}
	@action.bound
	setBookData(book:BookResource) : void {
		this.id = book._id;
		this.name.setValue(book.name);
		this.imageUrl.setValue(book.imageUrl);
		this.description.setValue(book.description);
		this.categoryId.setValue(book.categoryId);
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