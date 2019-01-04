import Vuex from 'vuex';
import Vue from 'vue';
import UsersModule from "./users.module";
import BooksModule from "./books.module";
import CategoriesModule from "./categories.module";
import CategoryFormModule from "./category_form.module";


Vue.use(Vuex);

const store = new Vuex.Store({

  modules:{
    users: UsersModule,
    books: BooksModule,
    categories: CategoriesModule,
    categoryForm : CategoryFormModule
  }
});

export default store;