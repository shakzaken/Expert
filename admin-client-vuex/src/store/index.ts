import AppStore from "./store";
import BookModule from "./bookModule";
import BooksList from "./booksList";
import UsersList from "./usersList";
import UserModule from "./userModule";
import CategoryModule from "./categoryModule";
import CategoriesList from "./categoriesList";
import Field from "./field";

const store = new AppStore();
const BooksListObj = new BooksList();
export {store,BookModule,BooksList,UsersList,
	Field,UserModule,CategoryModule,CategoriesList,BooksListObj};
