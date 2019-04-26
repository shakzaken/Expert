import axios from "axios";
import router from "@/router";
import {ActionTree} from "vuex";
import {BookFormState} from "@/types";
import {RootState} from "@/store";



export const actions : ActionTree<BookFormState,RootState> = {
	
	
	async fetchCategories({commit}){
		const result = await axios.get("/categories");
		const categories = result.data.map(category => ({
			id: category._id,
			name: category.name
		}));
		commit("setCategories",categories);
	},
	async createBook(context){
		const data = {
			name: context.state.name,
			description: context.state.description,
			imageUrl: context.state.imageUrl,
			categoryId: context.state.categoryId
		};
		await axios.post("/books",data);
		router.push("/books");
		context.commit("clearForm");
	},

	async updateBook(context){
		const id = context.state.id;
		const data = {
			name: context.state.name,
			description: context.state.description,
			imageUrl: context.state.imageUrl,
			categoryId: context.state.categoryId
		};
		
		await axios.put(`/books/${id}`,data);
		router.push("/books");
		context.commit("clearForm");
	},
	async editForm(context,id) {
		const result = await axios.get(`/books/${id}`);
		context.commit("setBookDataFromServer" , result.data);
	}
}