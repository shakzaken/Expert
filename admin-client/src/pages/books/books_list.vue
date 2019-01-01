<template>
  <div class="books-list">
        <div class="books-list-header">
            <h3 class="books-list-title">Books list</h3>
            <div class="books-list-button">
                <el-button type="info" plain round>Create Book</el-button>
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
        </el-table>
  </div>
</template>

<script>
import {BOOKS} from "../../store/types";
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
