
import router from "@/router";
import { Module } from "vuex";
import { RootState } from '@/store';
import {CategoryFormState, CategoryResource, CategoryModel} from "@/types";
import { api } from '@/api/api';




export const CategoryFormModule: Module<CategoryFormState,RootState> = {
	namespaced:true,
    state: {
        name: ""
    },
    getters:{
        name(state){
            return state.name;
		},
		categoryForServer(state) : CategoryResource {
			return {
				name: state.name
			};
		}
    },
    mutations:{
        setName(state,name){
            state.name = name;
        },
        clearForm(state){
            state.name = '';
        }
    },
    actions:{
        async createCategory({commit,getters}){	
			const category : CategoryModel = getters.categoryForServer;
			await api.categories.createCategory(category);
			router.push("/categories");
			commit("clearForm");
        }    
    }
}