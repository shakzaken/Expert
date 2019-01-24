<template>
    <div class="user-form-container">
        <h4 class="header">User Form</h4>
        <el-form 
            :model="formData" 
            :rules="rules" 
            ref="userForm" 
            label-width="120px"
            class="user-form">
                <el-form-item label="Name" prop="name">
                    <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="Email" prop="email">
                    <el-input v-model="email"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input v-model="passowrd"></el-input>
                </el-form-item>
                <el-form-item label="Confirm Password" prop="confirmPassword">
                    <el-input v-model="confirmPassword"></el-input>
                </el-form-item>            
        </el-form>
        <el-button 
            class="save-button" 
            type="info" plain round 
            @click="saveUser">
                Save
        </el-button>
    </div>
</template>

<script>
import {USERS_FORM} from "../../store/types";
import {ERROR_STATUS} from "../../constants";


export default {
    name: "User-Form",
    computed:{
        rules(){
           return this.$store.getters[USERS_FORM.GETTERS.RULES]; 
        },
        name:{
            get(){
                return this.$store.getters[USERS_FORM.GETTERS.NAME];
            },
            set(name){
                this.$store.commit(USERS_FORM.MUTATIONS.SET_NAME,name);
            }
        },
        email:{
            get(){
                return this.$store.getters[USERS_FORM.GETTERS.EMAIL];
            },
            set(email){
                this.$store.commit(USERS_FORM.MUTATIONS.SET_EMAIL,email);
            }
        },
        password:{
            get(){
                return this.$store.getters[USERS_FORM.GETTERS.PASSWORD];
            },
            set(password){
                this.$store.commit(USERS_FORM.MUTATIONS.SET_PASSWORD,password);
            }
        },
        confirmPassword:{
            get(){
                return this.$store.getters[USERS_FORM.GETTERS.CONFIRM_PASSWORD];
            },
            set(confirmPassword){
                this.$store.commit(USERS_FORM.MUTATIONS.SET_CONFIRM_PASSOWRD);
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
