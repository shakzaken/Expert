<template>
    <div class="register-page">
        <form-group header="Register" v-if="store">
            <input-group label="Name">
                <input-text :field="store.name"/>
            </input-group>
            <input-group label="Email">
                <input-text :field="store.email"/>
            </input-group>
            <input-group label="Password">
                <input-text type="password" :field="store.password"/>
            </input-group>
            <input-group label="Confirm Password">
                <input-text type="password" :field="store.confirmPassword"/>
            </input-group>
            <div class="button-container">
                <el-button round @click="register">Register</el-button>
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
import Users from '../store/users';

@Observer
@Component({
  components:{InputGroup,FormGroup,InputText}
})
export default class Login extends Vue{
    @Prop() store : Users;

    async register(){
      const result  =  await this.store.register();
      result && this.$router.push("/");
    }

    destroyed(){
      this.store.clearForm();
    }

}


</script>


<style lang="scss" scoped>
    .register-page{
        margin-left:20%;
        margin-top:50px;
        .button-container{
            display: flex;
            justify-content: flex-end;
        }
    }
    
</style>
