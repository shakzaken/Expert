<template>
  <div class="books-list">
        <div class="books-list-header">
            <h3 class="books-list-title">Books list</h3>
            <div class="books-list-button">
                <router-link to="/books/form">
                    <el-button type="info" plain round>Create Book</el-button>
                </router-link>
            </div>
        </div>
        <el-table :data="state.list">
            <el-table-column 
                prop="name"
                label="Name"
                width="180">
            </el-table-column>
            <el-table-column 
                prop="description"
                label="Description"
                width="180">
            </el-table-column>
            <el-table-column 
                prop="date"
                label="Date"
                width="180">
            </el-table-column>
            <el-table-column
                label="Operations">
                <template slot-scope="scope">
                    <router-link :to="`/books/form/${scope.row.id}`">
                        <el-button size="mini">Edit</el-button>
                    </router-link>
                    <el-button
                        size="mini"
                        type="danger"
                        >Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script lang="ts">
import {Button , Alert} from 'element-ui';
import {formMixin} from "@/mixins";
import {BooksModule} from "@/pages/books/books_list/books.module";
import Vue from "vue";

import { Observer } from 'mobx-vue';
//import { BooksList } from '../../../store1';
import { Prop ,Component} from 'vue-property-decorator';



@Observer
@Component({
	components:{}
})
export default class BooksListComponenet extends Vue {

	someData = ["boom","sadas"];
	
	get state()  {
	 return this.$root.$data.booksList;
	}
	
	
	get books(){
		//return JSON.parse(JSON.stringify(this.state.booksList));
		return [];
	}
	
	async mounted(){
		await this.state.fetchBooks();
	
	}

}



/*

export default Vue.extend({
	name: "BooksList",
	mixins:[formMixin("books",BooksModule)],
    created(){
        this.fetchBooks();
    },
    methods:{
        handleDelete(id){
            if(confirm("Are you sure you want to delete this book?")){
               this.deleteBook(id);
            }
        }
    }
});
*/
</script>


<style lang="scss" scoped>
    .books-list{
        &-header{
            display: flex;
            margin-bottom: 50px;
        }
        &-title{
            flex:1;
            padding-left: 50px;
            padding-top: 10px;
        }
        &-button{
            flex:1;
        }
    }
</style>
*/