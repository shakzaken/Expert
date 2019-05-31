import BookModule from "./bookModule";
import BooksList from "./booksList";
import UsersList from "./usersList";
import UserModule from "./userModule";
import CategoryModule from "./categoryModule";
import CategoriesList from "./categoriesList";
import {observable} from "mobx";



export default class AppStore{

	userModule: UserModule;
	usersList: UsersList;
	bookModule: BookModule;
	@observable
	booksList: BooksList;
	categoryModule: CategoryModule;
	categoriesList: CategoriesList;


	constructor(){
		this.userModule = new UserModule();
		this.usersList = new UsersList();
		this.bookModule = new BookModule();
		this.booksList = new BooksList();
		this.categoryModule = new CategoryModule();
		//this.categoriesList = new CategoriesList();
	}


}