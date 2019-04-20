import {mapFieldsMutations} from "../../../services/field/field";
import {MutationTree} from "vuex";
import {FIELDS,BookFormState} from "./book_form.module";


export const mutations : MutationTree<BookFormState> = {
	...mapFieldsMutations(FIELDS),
	setBookDataFromServer : (state,book) => {
		state.name = book.name;
		state.description = book.description;
		state.imageUrl = book.imageUrl;
		state.categoryId = book.categoryId;
		state.id = book._id
	},
	clearForm : (state) => {
		state.name = '';
		state.description = '';
		state.imageUrl = '';
		state.categoryId = '';
		state.id = null;
	}
}