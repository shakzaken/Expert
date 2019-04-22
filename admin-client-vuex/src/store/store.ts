import Vuex from 'vuex';
import Vue from 'vue';
import UsersModule from "./users.module";
import BooksModule from "./books/books.module";
import {BookFormModule} from "./books/book_form/book_form.module";
import CategoriesModule from "./categories.module";
import {CategoryFormModule} from "./category_form.module";
import {StoreOptions} from "vuex";

Vue.use(Vuex);

export interface RootState  {

}

const store : StoreOptions<RootState> = new Vuex.Store({

  modules:{
    users: UsersModule,
    books: BooksModule,
    bookForm : BookFormModule,
    categories: CategoriesModule,
    categoryForm : CategoryFormModule
  }
});

export default store;