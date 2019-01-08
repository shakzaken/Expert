<template>
  <div class="categories-list">
        <div class="categories-list-header">
            <h3 class="categories-list-title">Categories list</h3>
            <div class="categories-list-button">
                <router-link to="/categories/form">
                    <el-button type="info" plain round>Create Category</el-button>
                </router-link>
            </div>
        </div>
        <el-table :data="categories">
            <el-table-column 
                prop="_id"
                label="ID"
                width="250">
            </el-table-column>
            <el-table-column 
                prop="name"
                label="Name"
                width="180">
            </el-table-column>
               <el-table-column
                    label="Operations">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
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
import {CATEGORIES} from "../../store/types";
export default {
    name: "CategoriesList",
    created(){
        this.$store.dispatch(CATEGORIES.ACTIONS.FETCH_LIST);
    },
    computed:{
        categories(){
            return this.$store.getters[CATEGORIES.GETTERS.LIST];
        }
    },
    methods:{
        handleEdit(index,row){
           console.log(index,row); 
        },
        handleDelete(id){
            if(confirm("Are you sure you want to delete this category")){
                this.$store.dispatch(CATEGORIES.ACTIONS.DELETE_CATEGORY,id);
            }
        }
    }
}
</script>



<style lang="scss" scoped>
    .categories-list{
        &-header{
            display: flex;
            margin-bottom: 30px; 
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
