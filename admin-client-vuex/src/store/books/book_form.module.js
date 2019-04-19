import {BOOK_FORM} from "../types";
import axios from "axios";
import router from "../../router";
import {mapFieldGetters,mapFieldsMutations} from "../../services/field/field";
import {setBookDataFromServer, clearBookForm} from "./books.services";
const FIELDS = ['id','name','description','imageUrl','categoryId','categories'];

export default {
	namespaced:true,
    state: {
        id: '',
        name : {
			value:'',
			dirty:false,
			validators:[]
		},
        description: {
			value:'',
			dirty:false,
			validators:[]
		},
        imageUrl: {
			value:'',
			dirty:false,
			validators:[]
		},
        categoryId: {
			value:'',
			dirty:false,
			validators:[]
		},
        categories: []
    },
    getters:{
		...mapFieldGetters(FIELDS),
    },
    mutations:{
		...mapFieldsMutations(FIELDS),
        setBookDataFromServer : (state,book) => {
            setBookDataFromServer(state,book);
        },
        clearForm : (state) => {
            clearBookForm(state)
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