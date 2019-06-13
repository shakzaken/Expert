import {observable,computed,action, toJS} from "mobx";
import axios,{ResponseType} from "axios" ;
axios.defaults.baseURL= "http://localhost:3500"

interface BookResource {
	_id: string;
	name: string;
	imageUrl: string;
	description: string;
	categoryId: string;
}

interface Book {
	id: string;
	name: string;
	imageUrl: string;
	description: string;
	categoryId: string;
}

export interface Item {
	id?: string;
	bookId: string;
	bookName: string;
	imageUrl: string;
	quantity: number;
}

export default class Store {


	@observable
	items: Item[];

	@observable
	books: Book[];


	constructor(){
		this.items = [];
		this.books = [];
	}



	@action.bound
	async fetchBooks(){
		const response = await axios.get("/books");
		this.items = response.data.map((book:any) => {
			return {
				bookId: book._id,
				bookName : book.name,
				quantity: 0,
				imageUrl : book.imageUrl
			};
		});
	}

	@action.bound
	addQuantity(bookId:string){
		const item : Item|undefined = this.items.find(item => item.bookId === bookId);
		if(item){
			item.quantity = item.quantity + 1;
		}
	}
	@action.bound
	decreaseQuantity(bookId:string){
		const item : Item|undefined = this.items.find(item => item.bookId === bookId);
		if(item && item.quantity > 0){
			item.quantity = item.quantity - 1;
		}
	}

	@computed
	get itemsForCart(){
		return this.items.map(item => toJS(item))
						.filter(item => item.quantity > 0);
	}
}