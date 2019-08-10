<template>
    <div class="login-page">
        <form-group header="Login" v-if="store">
            <input-group label="Email">
                <input-text :field="store.email"/>
            </input-group>
            <input-group label="Password">
                <input-text type="password" :field="store.password"/>
            </input-group>
            <div class="button-container">
              <el-button round @click="login">Login</el-button>
            </div>
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
import {Store} from "../store/store";

@Observer
@Component({
  components:{InputGroup,FormGroup,InputText}
})
export default class Login extends Vue{
    @Prop() store : Auth;

    async login(){
        try{
          await this.store.login();
          this.$message({
            type:"success",
            message:"You are logged in",
            offset:70
          });
          this.$router.push("/");
        }catch(err){
          this.$message({
            type:"error",
            message:"Email or Password are invalid",
            offset:70
          });
        }
    }
    destroyed(){
      this.store.clearForm();
    }

}


</script>


<style lang="scss" scoped>
    .login-page{
        margin-left:20%;
        margin-top:80px;
    }
    .button-container{
      display:flex;
      justify-content: flex-end;
    }
</style>
