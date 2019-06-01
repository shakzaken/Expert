import { observable, action, computed,toJS } from 'mobx';
import { BookModel } from '@/types';
import { api } from '@/api/api';




export default class BooksList {

	@observable.ref
	booksList: BookModel[] = [];


	constructor(){

	}

	@action.bound
	async fetchBooks(){
		this.booksList = await api.books.getBooks();

	}



	@action.bound
	async deleteBook(id: string) : Promise<void>{
		await api.books.deleteBook(id);
		this.fetchBooks();
	}

	@computed
	get list(){
		return this.booksList.map(book => toJS(book));
	}

}
