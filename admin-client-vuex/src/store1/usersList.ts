import { observable, action,IObservableArray } from 'mobx';
import { UserModel } from '@/types';
import { api } from '@/api/api';
import {Field} from "@/store1";

export default class UsersList{


	@observable
	usersList: UserModel[];

	constructor(){
		//this.usersList = ["asdasd","sadasd","shak"] ;
	}

	@action.bound
	async fetchUsers() : Promise<void>{
		this.usersList  =  await api.users.getUsers();
		//this.usersList.replace(usersList);
	}

	@action.bound
	async deleteUser(id:string) : Promise<void>{
		await api.users.deleteUser(id);
		this.fetchUsers();
	}

}
