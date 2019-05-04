
import moment from "moment";
import _ from "lodash";
import { Module } from 'vuex';
import { RootState } from '@/store';
import {BooksState, BookModel} from "@/types";
import {api} from "@/api/api";

export const BooksModule : Module<BooksState,RootState> = {
	namespaced:true,
    state:{
        books: []
    },
    getters:{
        books(state){
			return state.books.map((book:BookModel) => ({
				id:book.id,
				name:book.name,
				description: book.description,
				date: moment(book.date).format("DD/MM/YYYY"),
				categroyId: book.categoryId,
				imageUrl: book.imageUrl
			}));
        }
    },
    mutations:{
        setBooks(state,booksList : BookModel[]){
            state.books = booksList;
        }
    },
    actions:{
        async fetchBooks(context){
			const books : BookModel[] = await api.books.getBooks();
			context.commit("setBooks",books);
        },
        async deleteBook({dispatch},id){
			await api.books.deleteBook(id);
			dispatch("fetchBooks");
		},
		async editBook(context,id){
			context.dispatch("bookForm/editBook",id,{root:true});
		}

    }
}
