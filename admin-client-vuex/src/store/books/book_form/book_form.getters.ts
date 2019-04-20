import {mapFieldGetters} from "../../../services/field/field";
import {GetterTree} from "vuex";
import {FIELDS,BookFormState} from "./book_form.module";
import {RootState} from "../../store";

export const getters : GetterTree<BookFormState,RootState> = {
	...mapFieldGetters(FIELDS)
}