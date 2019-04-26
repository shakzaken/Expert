import {mapFieldGetters} from "@/services/field/field";
import {GetterTree} from "vuex";
import {BOOK_FORM_FIELDS as FIELDS,BookFormState} from "@/types";
import {RootState} from "@/store";

export const getters : GetterTree<BookFormState,RootState> = {
	...mapFieldGetters(FIELDS)
}