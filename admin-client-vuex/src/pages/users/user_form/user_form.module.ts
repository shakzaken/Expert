import {USER_FORM_FIELDS as FIELDS,UserResource,UserFormState, UserModel} from "@/types";
import router from "@/router";
import {Module} from "vuex";
import {RootState} from "@/store";
import {mapFieldGetters,mapFieldsMutations} from "@/services/field/field";
import {api} from "@/api/api";




export const UserFormModule : Module<UserFormState,RootState> = {
	namespaced:true,
    state:{
		id:'',
        name: '',
        email: '',
		password: '',
		confirmPassword: '',
		editState: false
    },
    getters:{
		...mapFieldGetters(FIELDS),
		getUserForServer(state) : UserResource {
			return {
				name: state.name,
				email: state.email,
				password: state.password
			};
		}
    },
    mutations:{
        ...mapFieldsMutations(FIELDS),
        clearForm(state){
			state.id = '';
            state.name = '';
			state.password = '';
			state.confirmPassword = '';
            state.email = '';
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
			state.name = user.name;
			state.email = user.email;
			state.password = '';
			state.confirmPassword = '';
		}
       
    },
    actions:{
        async createUser({getters,commit}){
            const userForServer : UserResource = getters.getUserForServer;
			await api.users.createUser(userForServer);
			router.push("/users");
			commit("clearForm");
		},
		async updateUser({getters,commit,state}){
			const userForServer : UserResource = getters.getUserForServer;
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
		}
    }
}