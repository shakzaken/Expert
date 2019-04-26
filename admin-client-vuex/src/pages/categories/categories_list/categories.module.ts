
import axios from 'axios';
import {Module} from "vuex";
import {RootState} from "@/store";

interface CategoriesState {
	categories: any[];
}


export const CategoriesModule : Module<CategoriesState,RootState> =  {
	namespaced:true,
    state:{
        categories: []
    },
    getters:{
        categories(state){
            return state.categories;
        }
    },
    mutations:{
        categories(state, categoriesList){
            state.categories = categoriesList;
        }
    },
    actions:{
        async fetchCategories(context) {
            const result = await axios.get("/categories");
			await context.commit("categories",result.data);
        },
        async deleteCategory(context,id){
            await axios.delete(`/categories/${id}`);
			context.dispatch("fetchCategories");
        }
    }
}