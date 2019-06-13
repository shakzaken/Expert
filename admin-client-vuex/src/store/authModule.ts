import {observable,computed,action} from "mobx";
import { Field } from './index';
import {api} from "@/api/api"
import { AuthSummary } from '@/types';
import router from "@/router";
import axios from "axios";

export default class AuthModule {


	@observable
	email: Field<string>;

	@observable
	password: Field<string>;

	@observable
	isLogin: boolean;

	constructor(){
		this.email = new Field();
		this.password = new Field();
		this.isLogin = false;
	}


	@action.bound
	async login(){
		const loginDetails : AuthSummary = {
			email : this.email.value,
			password: this.password.value
		};
		const token : string = await api.auth.login(loginDetails);
		token && localStorage.setItem("token",token);
		token && localStorage.setItem("email",this.email.value);
		this.updateTokenInfo(token);
		this.password.clearField();
	}

	@action.bound
	autoLogin(){
		const token : string|null = localStorage.getItem("token");
		this.updateTokenInfo(token);
	}

	@action.bound
	updateTokenInfo(token:string|null){
		if(token){
			axios.defaults.headers.common['Authorization'] = token;
			const email : string = localStorage.getItem("email");
			this.email.setValue(email);
			this.isLogin = true;
			this.isLogin && router.push("/users");
		}else{
			this.isLogin = false;
			localStorage.removeItem("token");
		}
	}

	@action.bound
	logout(){
		this.email.clearField();
		this.password.clearField();
		localStorage.clear();
		this.isLogin = false;

	}

}