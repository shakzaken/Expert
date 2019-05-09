import {USER_FORM_FIELDS as FIELDS,UserResource, UserModel} from "@/types";
import router from "@/router";
import {Module} from "vuex";
import {RootState} from "@/store";
import {mapFieldGetters,mapFieldsMutations} from "@/services/field/field";
import {api} from "@/api/api";
import {Required,MaxLength,MinLength} from "@/services/validators";
import {Field,FieldState} from "@/store/field";

export interface Field{
	value: any;
	dirty:boolean;
	validators:Function[];
}

export interface UserFormState {
	name: Module<RootState,FieldState>
	id:string;
	email:Field;
	password:Field;
	confirmPassword:Field;
	editState:boolean;
}


export const UserFormModule : Module<UserFormState,RootState> = {
	namespaced:true,
	modules:{
		name: Field
	},
    state:{
		id:'',
		/*
        name: {
			value: '',
			validators:[Required,MinLength(3),MaxLength(255)],
			dirty: false
		},
		*/
        email: {
			value: '',
			validators:[Required,MinLength(3),MaxLength(255)],
			dirty: false
		},
		password: {
			value: '',
			validators:[Required,MinLength(4),MaxLength(512)],
			dirty: false
		},
		confirmPassword: {
			value: '',
			validators:[Required,MinLength(4),MaxLength(512)],
			dirty: false
		},
		editState: false
    },
    getters:{
		...mapFieldGetters(FIELDS),
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
        ...mapFieldsMutations(FIELDS),
        clearForm(state){
			state.id = '';
			state.name.value = '';
			state.password.value = '';
			state.confirmPassword.value = '';
			state.email.value = '';
			
        },
        setUserData : (state, user) => {
            state.name = user.name,
            state.email = user.email
		},
		setEditState(state,editState){
			state.editState = editState;
		},
		setUserDataFromServer(state,user : UserModel){
			state.id = user.id;
			state.name.value = user.name;
			state.email.value = user.email;
			state.password.value = '';
			state.confirmPassword.value = '';

		},
		clearDirtyFields(state){
			state.name.dirty = false;
			state.email.dirty = false;
			state.password.dirty = false;
			state.confirmPassword.dirty = false;
		},
		setFields(state){
			state.name.validators = [Required,MinLength(3),MaxLength(255)];
			
		}
       
    },
    actions:{
        async createUser({getters,commit}){
            const userForServer : UserResource = getters.getUserForCreation;
			await api.users.createUser(userForServer);
			router.push("/users");
			commit("clearForm");
		},
		async updateUser({getters,commit,state}){
			const userForServer : UserResource = getters.getUserForUpdate;
			const id : string = state.id;
			await api.users.updateUser(id,userForServer);
			router.push("/users");
			commit("clearForm");
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
			commit("clearDirtyFields");
		}
    }
}