import {CATEGORIES} from "./types";
import axios from 'axios';
import { CategoriesList } from "../pages/categories";


export default {
    state:{
        categories: []
    },
    getters:{
        [CATEGORIES.GETTERS.LIST] : (state) => {
            return state.categories;
        }
    },
    mutations:{
        [CATEGORIES.MUTATIONS.SET_LIST] : (state, categoriesList) => {
            state.categories = categoriesList;
        }
    },
    actions:{
        [CATEGORIES.ACTIONS.FETCH_LIST] : (context) => {
            axios.get("/categories").then(result =>{
                context.commit(CATEGORIES.MUTATIONS.SET_LIST,result.data);
            }).catch(err =>{
                console.log(err);
            });
        }
    }
}