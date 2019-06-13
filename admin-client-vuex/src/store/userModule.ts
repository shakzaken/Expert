import {observable, computed, action} from "mobx";
import Field from "./field";
import {api} from "@/api/api";
import {UserModel, UserResource} from "@/types";
import { MinLength, MaxLength, Required } from './validators';

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
		this.name = new Field(null,[Required,MinLength(3),MaxLength(255)]);
		this.password = new Field(null,[Required,MinLength(4),MaxLength(255)]);
		this.email = new Field(null,[Required,MinLength(4),MaxLength(255)]);
		this.confirmPassword = new Field(null,[Required,MinLength(4),MaxLength(255)]);
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
	@computed 
	get getUserForUpdate() : UserResource {
		const  userResource : UserResource = {
			name: this.name.value,
			email: this.email.value
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
	setUserDataFromServer(user:UserModel){
		this.id = user.id;
		this.name.setValue(user.name);
		this.email.setValue(user.email);
	}

	@action.bound
	clearUserForm(){
		this.id = null;
		this.name.clearField();
		this.password.clearField();
		this.confirmPassword.clearField();
		this.email.clearField();
	}

	updateUser() : Promise<UserResource> {
		return api.users.updateUser(this.id,this.getUserForUpdate);
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