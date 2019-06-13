<template>
  <div class="login-page">
	  <h3 class="title">Login</h3>
	  <input-group label="Email">
	  	<input-text :field ="state.email" />
	  </input-group>
	  <input-group label="Password">
	  	<input-text :field ="state.password" />
	  </input-group>
	  <el-button plain round @click="state.login">Login</el-button>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import {} from "mobx";
import {Observer} from "mobx-vue";
import {Prop,Component} from "vue-property-decorator";
import {InputText,InputGroup} from "@/components"
import { Field } from '../../store';
import AuthModule from '../../store/authModule';


@Observer
@Component({
	components:{InputText,InputGroup}
})
export default class LoginPage extends Vue{


	get state() : AuthModule{
		return this.$root.$data.authModule;
	}
}

</script>


<style lang="scss" scoped>
	.login-page{
		background-color: #f4f4f4;
		border-radius: 30px;
		box-shadow: 2px 3px 5px #96969698;
		padding:50px;
		width:45%;
		.title{
			margin-left:45%;
		}
		
	}
</style>
