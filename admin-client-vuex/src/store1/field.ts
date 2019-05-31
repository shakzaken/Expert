import { observable,computed, action } from 'mobx';





export default class Field<T>{
	
	@observable
	private _value: T;

	@observable
	dirty:boolean;

	@observable
	validators: Function[] = [];

	constructor(value: T = null,validators?:Function[]){
		this._value = value;
		this.validators = validators;
	}


	@computed
	get value() : T {
		return this._value;
	}

	@action.bound
	setValue(value : T){
		this._value = value;
	}
}