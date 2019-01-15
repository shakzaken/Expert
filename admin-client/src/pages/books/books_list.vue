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
        <el-table :data="books">
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
                prop="categoryId"
                label="Category Id"
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
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.row._id)">Edit</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.row._id)">Delete</el-button>
                </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
import {BOOKS,BOOK_FORM} from "../../store/types";
import {Button , Alert} from 'element-ui';

export default {
    name: "BooksList",
    created(){
        this.$store.dispatch(BOOKS.ACTIONS.FETCH_LIST);
    },
    computed:{
        books(){
            return this.$store.getters[BOOKS.GETTERS.LIST];
        }
    },
    methods:{
        handleDelete(id){
            if(confirm("Are you sure you want to delete this book?")){
               this.$store.dispatch(BOOKS.ACTIONS.DELETE_BOOK,id); 
            }
        },
        handleEdit(id){
            this.$store.dispatch(BOOK_FORM.ACTIONS.OPEN_EDIT_FORM,id);
        }
    }
}
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
