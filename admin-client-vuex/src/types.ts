


export const BOOK_FORM_FIELDS = ['name','description','imageUrl','categoryId','categories'];
export const USER_FORM_FIELDS = ['name','email','password','confirmPassword'];



/*
*	BOOKS
*/

export interface BooksState{
	books: BookModel[];
}

export interface BookFormState {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	categoryId: string;
	categories: string[];
	editState: boolean;
}

export interface BookModel {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	categoryId: string;
	date?:string;
}
export interface BookResource {
	_id?: string;
	name: string;
	description: string;
	imageUrl: string;
	categoryId: string;
	date?:string
}



/*
*	USERS
*/


export interface UserFormState {
	id:string;
	name:string;
	email:string;
	password:string;
	confirmPassword:string;
	editState:boolean;
}

export interface UsersState {
	users: UserModel[];
}

export interface UserResource {
	_id?:string;
	name:string;
	email:string;
	password?:string;
}

export interface UserModel {
	id?:string;
	name:string;
	email:string;
	passowrd?: string;
	confirmPassowrd?: string;
}


/*
*	CATEGORIES
*/

export interface CategoryModel {
	id?: string;
	name: string;
}
export interface CategoryResource {
	_id?:string;
	name:string;
}

export interface CategoriesState {
	categories: CategoryModel[];
}

export interface CategoryFormState {
	name: string;
}










