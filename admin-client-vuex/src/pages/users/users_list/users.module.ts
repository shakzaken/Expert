import { USERS,User,UsersState } from "@/types";
import axios from "axios";
import { Module } from "vuex";
import { RootState } from "@/store";




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
        users(state,usersList){
            state.users = usersList;
        } 
    },
    actions:{
        async fetchUsers(context){
            const result = await axios.get("/users");
			context.commit("users",result.data);   
        }
    }

};