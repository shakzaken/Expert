export function mapFieldGetters(fields){
	let fieldsGetters = {};
	fields.forEach(field =>{
		fieldsGetters[field] = (state) =>{
			return state[field].value;	
		};
		fieldsGetters[field+"_errors"] = (state) => {
			const errors : string[] = [];
			if(state[field].dirty === false) {
				return [];
			}
			state[field].validators.forEach(validator =>{
				const currentError = validator(state[field].value);
				if(currentError){
					errors.push(currentError);
				}
			});
			return errors;
		}
	});
	return fieldsGetters;
}

export function mapFieldsMutations(fields){
	let fieldsMutations = {};
	fields.forEach(field =>{
		const firstLetter = field.charAt(0).toUpperCase();
		const methodName = `set${firstLetter}${field.substr(1,field.length-1)}`;
		fieldsMutations[methodName] = (state,value) =>{
			state[field].value = value;	
			state[field].dirty = true;
		};
	});
	return fieldsMutations;
}