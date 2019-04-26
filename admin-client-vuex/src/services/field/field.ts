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
		const firstLetter = field.charAt(0).toUpperCase();
		const methodName = `set${firstLetter}${field.substr(1,field.length-1)}`;
		fieldsMutations[methodName] = (state,value) =>{
			state[field] = value;	
		};
	});
	return fieldsMutations;
}