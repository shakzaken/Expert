import Vuex from 'vuex';
import Vue from 'vue';

import {UsersModule} from "./pages/users/users_list/users.module";
import {BooksModule} from "./pages/books/books_list/books.module";
import {BookFormModule} from "./pages/books/book_form/book_form.module";
import {CategoriesModule} from "./pages/categories/categories_list/categories.module";
import {CategoryFormModule} from "./pages/categories/category_form/category_form.module";
import {StoreOptions} from "vuex";
import { UserFormModule } from './pages/users';

Vue.use(Vuex);

export interface RootState  {
	
}

export const store : StoreOptions<RootState> = new Vuex.Store({

	modules:{
		users: UsersModule,
		userForm: UserFormModule,
		books: BooksModule,
		bookForm : BookFormModule,
		categories: CategoriesModule,
		categoryForm : CategoryFormModule
	}
});

