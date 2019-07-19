<template>
    <div class="register-page">
        <form-group header="Register" v-if="store && store.users">
            <input-group label="Name">
                <input-text :field="store.users.name"/>
            </input-group>
            <input-group label="Email">
                <input-text :field="store.users.email"/>
            </input-group>
            <input-group label="Password">
                <input-text type="password" :field="store.users.password"/>
            </input-group>
            <input-group label="Confirm Password">
                <input-text type="password" :field="store.users.confirmPassword"/>
            </input-group>
            <el-button @click="register">Register</el-button>
        </form-group>
    </div>

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
import {Store} from "@/store/store";

@Observer
@Component({
  components:{InputGroup,FormGroup,InputText}
})
export default class Login extends Vue{
    @Prop() store : Store;

    async register(){
      const result  =  await this.store.users.register();
      result && this.$router.push("/");
    }

    destroyed(){
      this.store.users.clearForm();
    }

}


</script>


<style lang="scss" scoped>
    .register-page{
        margin-left:20%;
        margin-top:50px;
    }
</style>
