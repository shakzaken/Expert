import {CATEGORY_FORM} from "./types";
import axios from "axios";
import router from "../routes";
import ERROR_STATUS from "../constants/errors_status";


export default {
    state: {
        name: ""
    },
    getters:{
        [CATEGORY_FORM.GETTERS.NAME] : (state) => {
            return state.name;
        },
        [CATEGORY_FORM.GETTERS.FORM] : (state) => {
            return state;
        },
        [CATEGORY_FORM.GETTERS.RULES] : (state) => {
            return {
                name: [
                    { required: true, message: 'Please input category name', trigger: 'blur' },
                    { min: 3, max: 255, message: 'Length should be 3 to 255', trigger: 'blur' }
                  ]
            };
        }
    },
    mutations:{
        [CATEGORY_FORM.MUTATIONS.NAME] : (state,name) => {
            state.name = name;
        }
    },
    actions:{
        [CATEGORY_FORM.ACTIONS.CREATE_CATEGORY] : (context) => {
            return new Promise((resolve,rejcet) =>{
                axios.post("/categories",{
                    name: context.state.name
                }).then(result =>{
                    if(result.status  === 400 && result.data.type === "name"){
                        reject({
                            status: ERROR_STATUS.NAME_ALREADY_EXISTS,
                            message: "Category name is already exists"
                        });
                    }
                    router.push("/categories");
                    resolve();
                }).catch(err => reject({
                    status: ERROR_STATUS.SERVER_ERROR,
                    message: "SERVER_ERROR"
                }));
            });
            
        }
    }
}