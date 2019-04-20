
import {Module} from "vuex";
import {RootState} from "../../store";
import {actions} from "./book_form.actions";
import {getters} from "./book_form.getters";
import {mutations} from "./book_form.mutations";


export const FIELDS = ['id','name','description','imageUrl','categoryId','categories'];
export interface BookFormState {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	categoryId: string;
	categories: string[];
}


export const BookFormModule : Module<BookFormState,RootState> = {
	namespaced:true,
    state: {
        id: null,
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
