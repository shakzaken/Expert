import {observable,computed,action, toJS} from "mobx";
<<<<<<< HEAD
import axios,{ResponseType,AxiosResponse} from "axios" ;
axios.defaults.baseURL= "http://localhost:3500"
=======
import axios,{ResponseType} from "axios" ;
import Auth from "./auth";

axios.defaults.baseURL= "http://localhost:3500";
>>>>>>> 8ec89cc64f8ffdf28d66639388702aef03fad707

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

export interface ItemResource {
	_id?: string;
	bookId: string;
	bookName: string;
	imageUrl: string;
	quantity: number;
}

export interface Order {
	id? : string;
	items: Item[];
	date? : string;
}

export interface OrderResource {
	_id? : string;
	items: ItemResource[];
	date? : string;
}

export default class Store {


	@observable
	items: Item[];

	@observable
	books: Book[];

	@observable
<<<<<<< HEAD
	orders: Order[];
=======
	auth: Auth;
>>>>>>> 8ec89cc64f8ffdf28d66639388702aef03fad707


	constructor(){
		this.items = [];
		this.books = [];
		this.auth = new Auth();
	}


	@computed
	get itemsForCart(){
		return this.items.map(item => toJS(item))
						.filter(item => item.quantity > 0);
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
	async fetchOrders(){
		const response : AxiosResponse<OrderResource[]> = await axios.get("/orders");
		this.orders = response.data.map(mapOrderResourceToOrder);
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
	
	@action.bound
	clearItems(){
		this.items = [];
	}

	@action.bound
	async saveOrder(){
		const order  = {
			items: this.itemsForCart
		};
		if(order.items.length > 0){
			const response :AxiosResponse<Order> = await axios.post("/orders",order);
			this.clearItems();
		}
		
	}

	
}


function mapItemResourceToItem(itemResource : ItemResource): Item {
	return {
		id: itemResource._id,
		bookName: itemResource.bookName,
		bookId: itemResource.bookId,
		imageUrl: itemResource.imageUrl,
		quantity: itemResource.quantity
	};
}

function mapOrderResourceToOrder(orderResource: OrderResource) : Order {


	const date = new Date(orderResource.date || '');
	const dateInString = orderResource.date && date.toLocaleDateString() || null;

	const order : Order = {
		id: orderResource._id,
		items: orderResource.items.map(mapItemResourceToItem),
	}
<<<<<<< HEAD
	if(dateInString){
		order.date = dateInString
	};
	return order;
}
=======
}
>>>>>>> 8ec89cc64f8ffdf28d66639388702aef03fad707
