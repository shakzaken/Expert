import { UserModel,UsersState,UserResource } from "@/types";
import { Module } from "vuex";
import { RootState } from "@/store";
import {api} from "@/api/api";



export const UsersModule : Module<UsersState,RootState>  = {
	namespaced:true,
    state:{
        users: []
    },
    getters:{
        users(state){
            return state.users;
        }
    },
    mutations:{
        setUsers(state,usersList){
            state.users = usersList;
        } 
    },
    actions:{
        async fetchUsers(context){
			const users : UserResource[] = await api.users.getUsers();
			context.commit("setUsers",users);   
		},
		async deleteUser({dispatch},id){
			if(confirm("Are you sure you want to delete this user?")){
				await api.users.deleteUser(id);
				dispatch("fetchUsers");
			}
		},
		async editUser({dispatch},id){
			dispatch("userForm/editUser",id,{root:true});
		}
    }

};