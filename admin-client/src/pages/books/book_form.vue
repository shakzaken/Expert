<template>
    <div class="book-form-container">
        <h4 class="header">Book Form</h4>
        <el-form 
            :model="formData" 
            :rules="rules" 
            ref="bookForm" 
            label-width="120px"
            class="book-form">
                <el-form-item label="Name" prop="name">
                    <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="Image Url" prop="imageUrl">
                    <el-input v-model="imageUrl"></el-input>
                </el-form-item>
                <el-form-item label="Description" prop="description">
                    <el-input
                        type="textarea"
                        :rows="2"
                        v-model="description">
                    </el-input>
                </el-form-item>
                <el-form-item label="Category" prop="categoryId">
                    <el-select v-model="categoryId" placeholder="Select Category">
                        <el-option
                            v-for="category in categories"
                            :key="category._id"
                            :label="category.name"
                            :value="category._id">
                        </el-option>
                    </el-select>
                </el-form-item>
                
        </el-form>
        <el-button 
            class="save-button" 
            type="info" plain round 
            @click="saveBook">
                Save
        </el-button>
    </div>
</template>

<script>
import {BOOK_FORM} from "../../store/types";
import {ERROR_STATUS} from "../../constants";

export default {
    name:"BookForm",
    created(){
        this.$store.dispatch(BOOK_FORM.ACTIONS.FETCH_CATEGORIES);
        if(this.isEditState){
            this.$store.dispatch(BOOK_FORM.ACTIONS.OPEN_EDIT_FORM,this.$route.params.id);
        }
    },
    destroyed(){
        this.$store.commit(BOOK_FORM.MUTATIONS.CLEAR_FORM);
    },
    computed:{
        rules(){
            return this.$store.getters[BOOK_FORM.GETTERS.RULES];
        },
        name:{
            get(){
                return this.$store.getters[BOOK_FORM.GETTERS.NAME];
            },
            set(name) {  
                this.$store.commit(BOOK_FORM.MUTATIONS.SET_NAME,name);
            }
        },  
        description:{
            get(){
                return this.$store.getters[BOOK_FORM.GETTERS.DESCRIPTION];
            },
            set(description){
                this.$store.commit(BOOK_FORM.MUTATIONS.SET_DESCRIPTION,description);
            }
        },
        imageUrl:{
            get(){
                return this.$store.getters[BOOK_FORM.GETTERS.IMAGE_URL];
            }, 
            set(imageUrl){
                this.$store.commit(BOOK_FORM.MUTATIONS.SET_IMAGE_URL,imageUrl);
            } 
        },
        categoryId:{
            get(){
                return this.$store.getters[BOOK_FORM.GETTERS.CATEGORY_ID];
            },
            set(categoryId){
                this.$store.commit(BOOK_FORM.MUTATIONS.SET_CATEGORY_ID,categoryId)
            }
        },
        categories(){
            return this.$store.getters[BOOK_FORM.GETTERS.CATEGORIES];
        },
        formData(){
            return this.$store.getters[BOOK_FORM.GETTERS.FORM_DATA];
        },
        saveAction(){
            if(this.isEditState){
                return BOOK_FORM.ACTIONS.UPDATE_BOOK;
            }else{
                return BOOK_FORM.ACTIONS.CREATE_BOOK;
            }
        },
        isEditState(){
            return this.$route.params.id ? true : false;
        }
    },
    methods:{
        saveBook(){ 
            this.$refs["bookForm"].validate(valid =>{
                if(valid){
                    this.$store.dispatch(this.saveAction)
                    .catch(errData => {
                        if(errData.type){
                            this.$message.error(errData.message);
                        }
                    });
                }
            });
            
        }
    }
}
</script>

<style lang="scss" scoped>
   
    .book-form{
        width:50%;
    }
    .header{
        margin-bottom: 30px;
        margin-left:100px;
    }
    .save-button{
        display: inline-block;
        margin-left:30%;
    }
</style>