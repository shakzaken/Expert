import axios from "axios";
import router from "../../../router";
import {ActionTree} from "vuex";
import {BookFormState} from "./book_form.module";
import {RootState} from "../../store";



export const actions : ActionTree<BookFormState,RootState> = {
	
	fetchCategories : (context) => {
		axios.get("/categories").then(result =>{
			context.commit("categories",result.data);
		});
	},

	createBook(context){
		const data = {
			name: context.state.name,
			description: context.state.description,
			imageUrl: context.state.imageUrl,
			categoryId: context.state.categoryId
		};
		return new Promise((resolve,reject) => {
			axios.post("/books",data).then(result =>{
				router.push("/books");
				context.commit("clearForm");
				resolve();
			}).catch(err =>{
				reject(err.response.data);
			});
		});
	},

	updateBook(context){
		const id = context.state.id;
		const data = {
			name: context.state.name,
			description: context.state.description,
			imageUrl: context.state.imageUrl,
			categoryId: context.state.categoryId
		};
		return new Promise((resolve,reject) => {
			axios.put(`/books/${id}`,data).then(result =>{
				router.push("/books");
				context.commit("clearForm");
				resolve();
			}).catch(err =>{
				reject(err.response.data);
			});
		});
	},

	editForm(context,id) {
		axios.get(`/books/${id}`).then(result =>{
			context.commit("setBookDataFromServer" , result.data);
		});
	}
}