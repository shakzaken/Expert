<template>
    <div class="category-form-container">
        <h4 class="header">Category Form</h4>
        <el-form 
            :model="form" 
            :rules="rules" 
            ref="categoryForm" 
            label-width="120px"
            class="category-form">
                <el-form-item label="Name" prop="name">
                    <el-input v-model="name"></el-input>
                </el-form-item>
        </el-form>
        <el-button 
            class="save-button" 
            type="info" plain round 
            @click="createCategory">
                Save
        </el-button>
    </div>
</template>


<script>
import {CATEGORY_FORM} from "../../store/types";
import {ERROR_STATUS} from "../../constants";

export default {
    name:"CategoryForm",
    computed:{
        rules(){
            return this.$store.getters[CATEGORY_FORM.GETTERS.RULES];
        },
        name:{
            get() {
                return this.$store.getters[CATEGORY_FORM.GETTERS.NAME];
            },
            set(name) {
                this.$store.commit(CATEGORY_FORM.MUTATIONS.NAME,name);
            }
        },
        form(){
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


