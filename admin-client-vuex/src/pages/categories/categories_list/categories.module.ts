
import {Module} from "vuex";
import {RootState} from "@/store";
import {CategoriesState, CategoryModel} from "@/types";
import {api} from "@/api/api"; 


export const CategoriesModule : Module<CategoriesState,RootState> =  {
	namespaced:true,
    state:{
        categories: []
    },
    getters:{
        categories(state) : CategoryModel[] {
            return state.categories;
        }
    },
    mutations:{
        categories(state, categoriesList:CategoryModel[]){
            state.categories = categoriesList;
        }
    },
    actions:{
        async fetchCategories(context) {
			const categories: CategoryModel[] = await api.categories.getCategories();
			await context.commit("categories",categories);
        },
        async deleteCategory(context,id){
			api.categories.deleteCategory(id);
			context.dispatch("fetchCategories");
        }
    }
}