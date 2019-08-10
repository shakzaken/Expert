
import {UsersList,UsersForm} from "./pages/users";
import {BooksList,BookForm} from "./pages/books";
import {CategoriesList,CategoryForm} from "./pages/categories";
import {LoginPage} from "./pages/auth";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
    { path: "/users/form", component: UsersForm },
	  { path: "/users/form/:id", component: UsersForm },
	  { path: "/users", component: UsersList },
    { path: "/books/form/:id", component: BookForm},
    { path: "/books/form", component: BookForm},
    { path: "/books", component: BooksList},
    { path: "/categories/form",component: CategoryForm},
    { path: "/categories",component: CategoriesList},
    { path: "/login",component: LoginPage}
];


const router = new VueRouter({
  routes
});

export default router;