import {USER_FORM_FIELDS as FIELDS,UserResource, UserModel} from "@/types";
import router from "@/router";
import {Module} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api/api";
import {Required,MaxLength,MinLength} from "@/services/validators";
import {Field,FieldState} from "@/store/field";



export interface UserFormState {
	name?: FieldState
	id:string;
	email?:FieldState;
	password?:FieldState;
	confirmPassword?:FieldState;
	editState:boolean;
}


export const UserFormModule : Module<UserFormState,RootState> = {
	namespaced:true,
	modules:{
		name: Field,
		email: Field,
		password: Field,
		confirmPassword: Field
	},
    state:{
		id:'',
		editState: false
    },
    getters:{
		getUserForCreation(state) : UserResource {
			return {
				name: state.name.value,
				email: state.email.value,
				password: state.password.value
			};
		},
		getUserForUpdate(state) : UserResource {
			return {
				name: state.name.value,
				email: state.email.value,
			};
		},
		getEditState(state) : boolean {
			return state.editState;
		}
    },
    mutations:{
		/*
        clearForm(state){
			state.id = '';
			state.name.value = '';
			state.password.value = '';
			state.confirmPassword.value = '';
			state.email.value = '';
		},
		*/
        setUserData : (state, user) => {
            state.name = user.name,
            state.email = user.email
		},
		setEditState(state,editState){
			state.editState = editState;
		},
		setId(state,id: string){
			state.id = id;
		},
		setFields(state){
			state.name.validators = [Required,MinLength(3),MaxLength(255)];
		}
       
    },
    actions:{
        async createUser({getters,commit,dispatch}){
            const userForServer : UserResource = getters.getUserForCreation;
			await api.users.createUser(userForServer);
			router.push("/users");
			dispatch("clearForm");
		},
		async updateUser({getters,dispatch,state}){
			const userForServer : UserResource = getters.getUserForUpdate;
			const id : string = state.id;
			await api.users.updateUser(id,userForServer);
			router.push("/users");
			dispatch("clearForm");
		},
		async saveUser({state,dispatch}){
			if(state.editState){
				dispatch("updateUser");
			}else{
				dispatch("createUser");
			}
		},
		async editUser({commit},id){
			const user : UserModel = await api.users.getUser(id);
			commit("setUserDataFromServer",user);
			commit("name/setValue");
			commit("clearDirtyFields");
		},
		setUserDataFromServer({commit},user : UserModel){
			commit("name/setValue", user.name);
			commit("email/setValue",user.email);
			commit("password/setValue",'');
			commit("confirmPassword",'');
		},
		clearForm({commit}){
			commit("setId",'');
			commit("name/setValue", '');
			commit("email/setValue",'');
			commit("password/setValue",'');
			commit("confirmPassword",'');
		}
    }
}