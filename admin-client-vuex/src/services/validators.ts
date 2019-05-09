

export const Required =  (value :any) =>{
	if(!value){
		return "Required to save";
	}
	return null;
}

export const MinLength = (min:number) => ( value:string ) => {
	if(value && value.length < min){
		return `Length should be more than ${min}`;
	}
	return null;
}

export const MaxLength = (max : number) => (value: string) => {
	if(value && value.length > max) {
		return `Length should be less than ${max}`;
	}
}