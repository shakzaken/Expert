import { observable, action, computed, toJS } from 'mobx';
import { UserModel } from '@/types';
import { api } from '@/api/api';

export default class UsersList{


	@observable.ref
	usersList: UserModel[] = [];

	constructor(){
	}

	@action.bound
	async fetchUsers() : Promise<void>{
		this.usersList  =  await api.users.getUsers();
	}

	@action.bound
	async deleteUser(id:string) : Promise<void>{
		await api.users.deleteUser(id);
		this.fetchUsers();
	}

	@computed
	get list() : UserModel[] {
		return this.usersList.map(user => toJS(user));
	}

}
