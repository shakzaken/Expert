import {CATEGORY_FORM} from "./types";
import axios from "axios";
import router from "../router";
import ERROR_STATUS from "../constants/errors_status";


export default {
    state: {
        name: ""

    },
    getters:{
        [CATEGORY_FORM.NAME] : (state) => {
            return state.name;
        }
    },
    mutations:{
        [CATEGORY_FORM.NAME] : (state,name) => {
            state.name = name;
        },
        [CATEGORY_FORM.MUTATIONS.CLEAR_FORM] : (state) => {
            state.name = '';
        }
    },
    actions:{
        [CATEGORY_FORM.ACTIONS.CREATE_CATEGORY] : (context) => {
            return new Promise((resolve,reject) =>{
                axios.post("/categories",{
                    name: context.state.name
                }).then(result =>{
                    router.push("/categories");
                    context.commit(CATEGORY_FORM.MUTATIONS.CLEAR_FORM);
                    resolve();
                }).catch(err => {
                    reject(err.response.data);
                });
            }); 
        }
        
        
    }
}