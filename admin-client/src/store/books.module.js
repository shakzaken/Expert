import  {BOOKS} from "./types";
import axios from "axios";


export default {

    state:{
        books: []
    },
    getters:{
        [BOOKS.GETTERS.LIST] : (state) => {
            return state.books;
        }
    },
    mutations:{
        [BOOKS.MUTATIONS.SET_LIST] : (state,booksList) => {
            state.books = booksList;
        }
    },
    actions:{
        [BOOKS.ACTIONS.FETCH_LIST] : (context) => {
            axios.get("/books").then(result =>{
                context.commit(BOOKS.MUTATIONS.SET_LIST,result.data);
            }).catch(err =>{
                console.log(err);
            });
        },
        [BOOKS.ACTIONS.DELETE_BOOK] : (context,id) => {
            axios.delete(`/books/${id}`).then(result =>{
                context.dispatch(BOOKS.ACTIONS.FETCH_LIST);
            }).catch(err =>{
                console.log(err);
            });
        }
        
    }
}