
import AuthStore from "./auth";
import UsersStore from "./users";
import { CartStore } from './cart';
import axios from "axios";
axios.defaults.baseURL= "http://localhost:3500";



class Store {

	public readonly auth: AuthStore;
	public readonly users: UsersStore;
	public readonly cart: CartStore;

	constructor(){
		this.cart = new CartStore();
		this.auth = new AuthStore();
		this.users = new UsersStore();
	}

}



const store = new Store();
export {store,Store};
