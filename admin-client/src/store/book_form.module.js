import {BOOK_FORM} from "./types";
import axios from "axios";

export default {
    state: {
        name,
        description,
        imageUrl,
        categoryId,
        categories
    },
    getters:{
        [BOOK_FORM.GETTERS.NAME] : (state) =>{
            return state.name;
        },
        [BOOK_FORM.GETTERS.DESCRIPTION] : (state) => {
            return state.description;
        },
        [BOOK_FORM.GETTERS.IMAGE_URL] : (state) => {
            return state.imageUrl;
        },
        [BOOK_FORM.GETTERS.CATEGORY_ID] : (state) => {
            return state.categoryId;
        },
        [BOOK_FORM.GETTERS.CATEGORIES] : (state) => {
            return state.categories;
        },
        [BOOK_FORM.GETTERS.FORM_DATA] : (state) =>{
            return {
                name: state.name,
                description: state.description,
                imageUrl: state.imageUrl,
                categoryId: state.categoryId  
              };
        },
        [BOOK_FORM.GETTERS.RULES] : () => {
            //TODO
            return {
                name: [
                    { required: true, message: 'Please input book name', trigger: 'blur' },
                    { min: 3, max: 255, message: 'Length should be 3 to 255', trigger: 'blur' }
                  ]
            };
        }
    },
    mutations:{
        [BOOK_FORM.MUTATIONS.SET_NAME] : (state,name) => {
            state.name = name;
        },
        [BOOK_FORM.MUTATIONS.SET_DESCRIPTION] : (state,description) => {
            state.description = description;
        },
        [BOOK_FORM.MUTATIONS.SET_IMAGE_URL] : (state,imageUrl) => {
            state.imageUrl = imageUrl;
        },
        [BOOK_FORM.MUTATIONS.SET_CATEGORY_ID] : (state,categoryId) => {
            state.categoryId = categoryId;
        },
        [BOOK_FORM.MUTATIONS.SET_CATEGORIES] : (state,categories) => {
            state.categories = categories;
        }
    },
    actions:{
        [BOOK_FORM.ACTIONS.FETCH_CATEGORIES] : (context) => {
            axios.get("/categories").then(result =>{
                context.commit(BOOK_FORM.MUTATIONS.SET_CATEGORIES,result.data);
            }); 
        },
        [BOOK_FORM.ACTIONS.SAVE_BOOK] : (context) => {
            const data = {
              name: context.state.name,
              description: context.state.description,
              imageUrl: context.state.imageUrl,
              categoryId: context.state.categoryId  
            };
            axios.post("/books",data).then(result =>{
                //TODO
            }).catch(err =>{
                //TODO
            });
        }
    }
}