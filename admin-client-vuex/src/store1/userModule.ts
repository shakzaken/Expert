import {observable, computed, action} from "mobx";
import Field from "./field";
import {api} from "@/api/api";
import {UserModel, UserResource} from "@/types";

export default class UserModule {

	@observable
	id:string;

	@observable
	name: Field<string>;

	@observable
	email: Field<string>;

	@observable
	password: Field<string>;

	@observable 
	confirmPassword: Field<string>;

	@observable
	loading: boolean;

	constructor(){
		this.name = new Field();
		this.password = new Field();
		this.email = new Field();
		this.confirmPassword = new Field();
		this.loading = false;
	}


	@computed
	get editState(){
		return !!this.id;
	}

	@computed 
	get getUserData() : UserResource {
		const  userResource : UserResource = {
			name: this.name.value,
			email: this.email.value,
			password: this.password.value,
		};
		return userResource;
	}

	@action.bound
	async setEditState(id: string){
		this.loading = true;
		const userResource = await api.users.getUser(id);
		this.setUserDataFromServer(userResource);
		this.loading = false;
	}

	@action.bound
	setUserDataFromServer(user:UserResource){
		this.id = user._id;
		this.name.setValue(user.name);
		this.email.setValue(user.email);
	}

	updateUser() : Promise<UserResource> {
		return api.users.updateUser(this.id,this.getUserData);
	}

	createUser() : Promise<UserResource> {
		return api.users.createUser(this.getUserData);
	}

	@action.bound
	saveUser() : Promise<UserResource> {
		if(this.editState){
			return this.updateUser();
		}else{
			return this.createUser();
		}
	}


}