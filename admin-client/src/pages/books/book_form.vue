<template>
    <div class="book-form-container">
        <h4 class="header">Book Form</h4>
        <el-form 
            :model="form" 
            :rules="rules" 
            ref="bookForm" 
            label-width="120px"
            class="book-form">
                <el-form-item label="Name" prop="name">
                    <el-input v-model="name"></el-input>
                </el-form-item>
        </el-form>
        <el-button 
            class="save-button" 
            type="info" plain round 
            @click="createBook">
                Save
        </el-button>
    </div>
</template>

<script>
import {BOOK_FORM} from "../../store/types";
import {ERROR_STATUS} from "../../constants";

export default {
    name:"BookForm",
    computed:{
        rules(){
            return this.$store.getters[BOOK_FORM.GETTERS.RULES];
        },
        name:{
            get: () => this.$store.getters[BOOK_FORM.GETTERS.NAME],
            set: (name) => this.$store.commit(BOOK_FORM.MUTATIONS.SET_NAME,name)
        },  
        description:{
            get: () => this.$store.getters[BOOK_FORM.GETTERS.description],
            set: (description) => this.$store.commit(BOOK_FORM.MUTATIONS.SET_DESCRIPTION,description)
        },
        imageUrl:{
            get: () => this.$store.getters[BOOK_FORM.GETTERS.imageUrl],
            set: (imageUrl) => this.$store.commit(BOOK_FORM.MUTATIONS.SET_IMAGE_URL,imageUrl)
        },
        categoryId:{
            get: () => this.$store.getters[BOOK_FORM.GETTERS.CATEGORY_ID],
            set: (categoryId) => this.$store.commit(BOOK_FORM.MUTATIONS.SET_CATEGORY_ID,categoryId)
        },
        categories(){
            return this.$store.getter[BOOK_FORM.GETTERS.CATEGORIES];
        },
        formData(){
            return this.$store.getters[CATEGORY_FORM.GETTERS.FORM];
        }
    },
    methods:{
        createCategory(){       
            this.$refs["categoryForm"].validate(valid =>{
                if(valid){
                    this.$store.dispatch(CATEGORY_FORM.ACTIONS.CREATE_CATEGORY)
                    .catch(errData => {
                        if(errData.type === "name"){
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
   
    .category-form{
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