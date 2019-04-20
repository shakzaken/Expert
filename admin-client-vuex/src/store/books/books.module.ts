import  {BOOKS} from "../types";
import axios from "axios";
import moment from "moment";
import _ from "lodash";


export default {

    state:{
        books: []
    },
    getters:{
        [BOOKS.GETTERS.LIST] : (state) => {
            let booksUI = [];
            state.books.forEach(book =>{
                let bookUI = _.clone(book);
                book.date = moment(book.date).format("DD/MM/YYYY");
                booksUI.push(bookUI);
                return bookUI;
            });
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
