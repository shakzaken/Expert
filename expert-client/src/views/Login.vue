<template>
    <div class="login-page">
        <form-group header="Login" v-if="store && store.auth">
            <input-group label="Email">
                <input-text :field="store.auth.email"/>
            </input-group>
            <input-group label="Password">
                <input-text type="password" :field="store.auth.password"/>
            </input-group>
            <el-button @click="login">Login</el-button>
        </form-group>
    </div>

</template>


<script lang="ts">

import Vue from "vue";
import {Component,Prop} from "vue-property-decorator";
import {Observer} from "mobx-vue";
import InputGroup from "@/components/input_group.vue";
import FormGroup from "@/components/form_group.vue";
import InputText from "@/components/input_text.vue";
import Auth from "../store/auth";
import {Store} from "@/store/store";

@Observer
@Component({
  components:{InputGroup,FormGroup,InputText}
})
export default class Login extends Vue{
    @Prop() store : Store;

    async login(){
        const result : boolean =  await this.store.auth.login();
        if(result){
          this.$message({
            type:"success",
            message:"You are logged in",
            offset:70
          });
          result && this.$router.push("/");
        }else{
          this.$message({
            type:"error",
            message:"Email or Password are invalid",
            offset:70
          });
        }

    }

}


</script>


<style lang="scss" scoped>
    .login-page{
        margin-left:20%;
        margin-top:80px;
    }
</style>
