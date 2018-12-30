
import {UsersList} from "./pages/users";
import {BooksList} from "./pages/books";
import {CategoriesList} from "./pages/categories";
import {LoginPage} from "./pages/auth";
import {} from "./pages/auth/index";


  const routes = [
    { path: "/users", component: UsersList },
    { path: "/books", component: BooksList},
    { path: "/categories",component: CategoriesList},
    { path: "/login",component: LoginPage}
  ]


export default routes;;