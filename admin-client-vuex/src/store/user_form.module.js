import {USERS_FORM} from "./types";
import axios from "axios";
import router from "../../src/router";


export default {
    state:{
        name: '',
        email: '',
        password: ''
    },
    getters:{
        [USERS_FORM.NAME] : (state) => {
            return state.name;
        },
        [USERS_FORM.EMAIL] : (state) => {
            return state.email;
        },
        [USERS_FORM.PASSWORD] : (state) => {
            return state.passowrd;
        },
        [USERS_FORM.CONFIRM_PASSWORD] : (state) => {
            return state.confirmPassword;
        },
        [USERS_FORM.GETTERS.FORM_DATA] : (state) => {
            return {
                name: state.name,
                email: state.email
            };
        }
    },
    mutations:{
        [USERS_FORM.NAME] : (state, name) => {
            state.name = name;
        },
        [USERS_FORM.EMAIL] : (state, email) => {
            state.email = email;
        },
        [USERS_FORM.PASSWORD] : (state, password) => {
            state.password = password;
        },
        [USERS_FORM.CONFIRM_PASSOWRD] : (state,confirmPassowrd) => {
            state.confirmPassword = confirmPassowrd;
        },
        [USERS_FORM.MUTATIONS.CLEAR_FORM] : (state) => {
            state.name = '';
            state.password = '';
            state.email = '';
        },
        [USERS_FORM.MUTATIONS.SET_USER_DATA] : (state, user) => {
            state.name = user.name,
            state.email = user.email
        }
       
    },
    actions:{
        [USERS_FORM.ACTIONS.CREATE_USER] : (context) => {
            const data = {
                name: context.state.name,
                email: context.state.email,
                password: context.state.password
            };
            return new Promise((resolve,reject) =>{
                axios.post("/users",data).then(result =>{
                    router.push("/users");
                    context.commit(USERS_FORM.MUTATIONS.CLEAR_FORM);
                    resolve();
                }).catch(err =>{
                    reject(err.response.data);
                })
            });
        }
    }
}