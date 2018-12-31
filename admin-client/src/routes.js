
import {UsersList} from "./pages/users";
import {BooksList} from "./pages/books";
import {CategoriesList} from "./pages/categories";
import {LoginPage} from "./pages/auth";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
    { path: "/users", component: UsersList },
    { path: "/books", component: BooksList},
    { path: "/categories",component: CategoriesList},
    { path: "/login",component: LoginPage}
];


const router = new VueRouter({
  routes
});

export default router;