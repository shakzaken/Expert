import { observable,computed, action } from 'mobx';





export default class Field<T>{
	
	@observable
	private _value: T;

	@observable
	dirty:boolean;

	@observable.ref
	validators: Function[] = [];

	constructor(value: T = null,validators:Function[] = []){
		this._value = value;
		this.validators = validators;
		this.dirty = false;
	}


	@computed
	get value() : T {
		return this._value;
	}

	@computed
	get errors(){
		const errors : string[] = [];
		this.validators.forEach(validator =>{
			const errorMessage : string|null = validator(this._value);
			errorMessage && errors.push(errorMessage);
		});
		return errors;
	}

	@computed
	get valid(){
		return this.errors.length === 0;
	}

	@action.bound
	clearField(){
		this._value = null;
		this.dirty = false;
	}

	@action.bound
	setValue(value : T){
		this._value = value;
	}
	@action.bound
	setDirty(){
		this.dirty = true;
	}
}