export function mapFieldGetters(fields){
	let fieldsGetters = {};
	fields.forEach(field =>{
		fieldsGetters[field] = (state) =>{
			return state[field];	
		};
	});
	return fieldsGetters;
}

export function mapFieldsMutations(fields){
	let fieldsMutations = {};
	fields.forEach(field =>{
		fieldsMutations[field] = (state,value) =>{
			state[field] = value;	
		};
	});
	return fieldsMutations;
}