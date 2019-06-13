import BookModule from "./bookModule";
import BooksList from "./booksList";
import UsersList from "./usersList";
import UserModule from "./userModule";
import CategoryModule from "./categoryModule";
import CategoriesList from "./categoriesList";
import AuthModule from "./authModule";



export default class AppStore{

	userModule: UserModule;
	usersList: UsersList;
	bookModule: BookModule;
	booksList: BooksList;
	categoryModule: CategoryModule;
	categoriesList: CategoriesList;
	authModule: AuthModule;


	constructor(){
		this.userModule = new UserModule();
		this.usersList = new UsersList();
		this.bookModule = new BookModule();
		this.booksList = new BooksList();
		this.categoryModule = new CategoryModule();
		this.categoriesList = new CategoriesList();
		this.authModule = new AuthModule();
	}


}
