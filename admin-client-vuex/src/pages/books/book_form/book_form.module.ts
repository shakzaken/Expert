
import {Module,MutationTree,GetterTree,ActionTree} from "vuex";
import {RootState} from "@/store";
import router from "@/router";
import {api} from "@/api/api";
import {mapFieldGetters,mapFieldsMutations} from "@/services/field/field";
import {BookFormState,CategoryModel, BookResource, BookModel,
	BOOK_FORM_FIELDS as FIELDS} from "@/types";
import {MaxLength,MinLength,Required} from "@/services/validators";


const getters : GetterTree<BookFormState,RootState> = {
	...mapFieldGetters(FIELDS),
	getBookForServer(state) : BookResource {
		const bookForServer : BookResource = {
			name : state.name,
			description : state.description,
			imageUrl: state.imageUrl,
			categoryId: state.categoryId
		};
		return bookForServer;
	}
}


const mutations : MutationTree<BookFormState> = {
	...mapFieldsMutations(FIELDS),
	setBookDataFromServer : (state,book:BookModel) => {
		state.name = book.name;
		state.description = book.description;
		state.imageUrl = book.imageUrl;
		state.categoryId = book.categoryId;
		state.id = book.id
	},
	clearForm : (state) => {
		state.name = '';
		state.description = '';
		state.imageUrl = '';
		state.categoryId = '';
		state.id = '';
	},
	setEditState(state,editState){
		state.editState = editState;
	}
}


const actions : ActionTree<BookFormState,RootState> = {
	
	async fetchCategories({commit}){
		const categories : CategoryModel[] = await api.categories.getCategories();
		commit("setCategories",categories);
	},
	async createBook({getters,commit}){
		const bookForServer : BookResource = getters.getBookForServer;
		await api.books.createBook(bookForServer);
		router.push("/books");
		commit("clearForm");
	},

	async updateBook({state,getters,commit}){
		const id = state.id;
		const bookForServer : BookResource = getters.getBookForServer;
		api.books.updateBook(id,bookForServer);
		router.push("/books");
		commit("clearForm");
	},
	saveBook({state,dispatch}){
		if(state.editState){
			dispatch("updateBook");
		}else{
			dispatch("createBook");
		}
	},
	async editBook(context,id) {
		const book : BookModel = await api.books.getBook(id);
		context.commit("setBookDataFromServer" , book);
	}
}

export const BookFormModule : Module<BookFormState,RootState> = {
	namespaced:true,
    state: {
        id: '',
        name: '',
        description:'',
        imageUrl: '',
        categoryId: '',
		categories: [],
		editState: false
    },
	getters,
	mutations,
	actions
};
