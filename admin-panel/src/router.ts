
import VueRouter, {RouteConfig} from 'vue-router';
import { UsersList } from "../src/components/users";
import { BooksList } from "../src/components/books";
import { CategoriesList } from "../src/components/categories";
import CategoryModel from "./store/categories.model";



const routes : Array<RouteConfig> = [
	{
		path: "/categories",
		component: CategoriesList
	},
	{
		path: "/books",
		component: BooksList
	},
	{
		path: "/users",
		component: UsersList	
	}	
	
];



const vueRouter: VueRouter = new VueRouter({
	routes: routes
});

export default vueRouter;