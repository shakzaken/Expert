import {BOOK_FORM} from "./types";
import axios from "axios";
import router from "../router";

export default {
    state: {
        name : '',
        description: '',
        imageUrl: '',
        categoryId: '',
        categories: []
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
                    { min: 3, max: 255, message: 'Name length should be 3 to 255', trigger: 'blur' }
                  ],
                description: [
                    { required: true, message: 'Please input book description', trigger: 'blur' },
                    { min: 5, max: 512, message: 'Description length should be 5 to 512', trigger: 'blur' }
                ],
                imageUrl: [
                    { required: true, message: 'Please input image url', trigger: 'blur' },
                    { min: 5, max: 512, message: 'Image url length should be 5 to 512', trigger: 'blur' },
                    { type: 'url', message: 'Please enter a valid url', trigger: 'blur' }
                ],
                categoryId: [
                    { required: true, message: 'Please input Category', trigger: 'change' }  
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
        },
        [BOOK_FORM.MUTATIONS.CLEAR_FORM] : (state) => {
            state.name = '',
            state.description = '',
            state.imageUrl = '',
            state.categoryId = ''
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
            return new Promise((resolve,reject) => {
                axios.post("/books",data).then(result =>{
                    router.push("/books");
                    context.commit(BOOK_FORM.MUTATIONS.CLEAR_FORM);
                    resolve();
                }).catch(err =>{
                    reject(err.response.data);
                });
            });
            
        }
    }
}