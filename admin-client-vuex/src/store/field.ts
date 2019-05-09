import {Module} from "vuex";
import {RootState} from "../store";

export interface FieldState  {

	value: any;
	dirty: boolean;
	validators: Function[];
}




export const Field : Module<FieldState,RootState>  = {

	state(){
		return {
			value:'',
			dirty: false,
			validators: []
		}	
	},
	mutations:{
		setValue(state,value : any){
			state.value = value;
			state.dirty = false;
		},
		setValidators(state,validators: Function[]){
			state.validators = validators;
		}
		
	},
	getters:{
		getValue(state){
			return state.value;
		},
		getErrors(state){
			const errors = [];
			if(!state.dirty){
				return [];
			}else{
				state.validators.forEach(validator => {
					const message : string = validator(state.value);
					if(message){
						errors.push(message);
					}
				});
				return errors;
			}
		}
	}
}