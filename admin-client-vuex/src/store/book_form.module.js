import {BOOK_FORM} from "./types";
import axios from "axios";
import router from "../router";

export default {
    state: {
        id: '',
        name : '',
        description: '',
        imageUrl: '',
        categoryId: '',
        categories: []
    },
    getters:{
        [BOOK_FORM.NAME] : (state) => {
            return state.name;
        },
        [BOOK_FORM.DESCRIPTION] : (state) => {
            return state.description;
        },
        [BOOK_FORM.IMAGE_URL] : (state) => {
            return state.imageUrl;
        },
        [BOOK_FORM.CATEGORY_ID] : (state) => {
            return state.categoryId;
        },
        [BOOK_FORM.CATEGORIES] : (state) => {
            return state.categories;
        }
    },
    mutations:{
        [BOOK_FORM.NAME] : (state,name) => {
            state.name = name;
        },
        [BOOK_FORM.DESCRIPTION] : (state,description) => {
            state.description = description;
        },
        [BOOK_FORM.IMAGE_URL] : (state,imageUrl) => {
            state.imageUrl = imageUrl;
        },
        [BOOK_FORM.CATEGORY_ID] : (state,categoryId) => {
            state.categoryId = categoryId;
        },
        [BOOK_FORM.MUTATIONS.CATEGORIES] : (state,categories) => {
            state.categories = categories;
        },
        [BOOK_FORM.MUTATIONS.SET_BOOK_DATA] : (state,book) => {
            state.name = book.name;
            state.description = book.description;
            state.imageUrl = book.imageUrl;
            state.categoryId = book.categoryId;
            state.id = book._id
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
        [BOOK_FORM.ACTIONS.CREATE_BOOK] : (context) => {
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
            
        },
        [BOOK_FORM.ACTIONS.UPDATE_BOOK] : (context) => {
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
                    context.commit(BOOK_FORM.MUTATIONS.CLEAR_FORM);
                    resolve();
                }).catch(err =>{
                    reject(err.response.data);
                });
            });
            
        },
        [BOOK_FORM.ACTIONS.OPEN_EDIT_FORM] : (context,id) => {
            axios.get(`/books/${id}`).then(result =>{
                context.commit(BOOK_FORM.MUTATIONS.SET_BOOK_DATA , result.data);
            });
        }
    }
}