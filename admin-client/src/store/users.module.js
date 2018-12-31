import { USERS } from "./types";
import axios from "axios";

export default {

    state:{
        users: []
    },
    getters:{
        [USERS.GETTERS.LIST] : (state) =>{
            return state.users;
        }
    },
    mutations:{
        [USERS.MUTATIONS.SET_LIST] : (state,usersList) =>{
            state.users = usersList;
        } 
    },
    actions:{
        [USERS.ACTIONS.FETCH_LIST] : (context) =>{
            axios.get("/users").then(result =>{
                context.commit(USERS.MUTATIONS.SET_LIST,result.data);
            }).catch(err =>{
                console.log(err);
            });
                
        }
    }

};