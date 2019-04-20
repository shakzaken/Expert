

import {Module} from "vuex";
import {RootState} from "../../store";
import {actions} from "./book_form.actions";
import {getters} from "./book_form.getters";
import {mutations} from "./book_form.mutations";
import {BookFormState} from "../../types";




export const BookFormModule : Module<BookFormState,RootState> = {
	namespaced:true,
    state: {
        id: '',
        name: '',
        description:'',
        imageUrl: '',
        categoryId: '',
        categories: []
    },
	getters,
	mutations,
	actions
};
