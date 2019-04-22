import {CATEGORY_FORM} from "./types";
import axios from "axios";
import router from "../router";
import ERROR_STATUS from "../constants/errors_status";
import { Module } from "vuex";
import { RootState } from './store';


interface CategoryState {
	name: string;
}


export const CategoryFormModule: Module<CategoryState,RootState> = {
	namespaced:true,
    state: {
        name: ""
    },
    getters:{
        name(state){
            return state.name;
        }
    },
    mutations:{
        name(state,name){
            state.name = name;
        },
        clearForm(state){
            state.name = '';
        }
    },
    actions:{
        async createCategory({state,commit}){	
			await axios.post("/categories",{ name: state.name });
			router.push("/categories");
			commit("clearForm");
        }    
    }
}