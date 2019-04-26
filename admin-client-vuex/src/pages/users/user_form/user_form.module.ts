import {USERS_FORM,USER_FORM_FIELDS as FIELDS} from "@/types";
import axios from "axios";
import router from "@/router";
import {Module} from "vuex";
import {RootState} from "@/store";
import {mapFieldGetters,mapFieldsMutations} from "@/services/field/field";


export interface UserFormState {
	name:string;
	email:string;
	password:string;
	confirmPassowrd:string;
}

export const UserFormModule : Module<UserFormState,RootState> = {
	namespaced:true,
    state:{
        name: '',
        email: '',
		password: '',
		confirmPassowrd: ''
    },
    getters:{
        ...mapFieldGetters(FIELDS)
    },
    mutations:{
        ...mapFieldsMutations(FIELDS),
        clearForm(state){
            state.name = '';
            state.password = '';
            state.email = '';
        },
        setUserData : (state, user) => {
            state.name = user.name,
            state.email = user.email
        }
       
    },
    actions:{
        async createUser(context){
            const data = {
                name: context.state.name,
                email: context.state.email,
                password: context.state.password
			};
			await axios.post("/users",data);
			router.push("/users");
			context.commit("clearForm");
        }
    }
}