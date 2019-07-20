<template>
    <form-group header="Login" v-if="store && store.auth">

        <input-group label="email">
            <input-text :field="store.auth.email"/>
        </input-group>
        <input-group label="password">
            <input-text :field="store.auth.password"/>
        </input-group>
        <el-button @click="login">Login</el-button>
    </form-group>
</template>


<script lang="ts">

import Vue from "vue";
import {Component,Prop} from "vue-property-decorator";
import {Observer} from "mobx-vue";
//import {InputGroup,FormGroup,InputText} from "@/components";
import InputGroup from "@/components/input_group.vue";
import FormGroup from "@/components/form_group.vue";
import InputText from "@/components/input_text.vue";
import Auth from "../store/auth";
import Store from "@/store/store";

@Observer
@Component({
  components:{InputGroup,FormGroup,InputText}
})
export default class Login extends Vue{
    @Prop() store : Store;

    login(){
      this.store.auth.login();
    }

}


</script>
