export interface User {
  id?:string;
  email:string;
  password:string;
  confirmPassword:string;
}

export interface UserResource {
  _id?:string;
  email:string;
  password:string;
  name:string;
}

export interface LoginResponse {
  user: UserResource;
  token: string;
}

export interface UserSummary {
  id:string;
  email:string;
}

export interface LoginResponse {
  user: UserResource;
  token: string;
}

export interface UserSummary {
  id:string;
  email:string;
}

export interface BookResource {
	_id: string;
	name: string;
	imageUrl: string;
	description: string;
	categoryId: string;
}

export interface Book {
	id: string;
	name: string;
	imageUrl: string;
	description: string;
	categoryId: string;
}



export interface Item {
	id?: string;
	bookId: string;
	bookName: string;
	imageUrl: string;
	quantity: number;
}

export interface ItemResource {
  _id?: string;
  bookId: string;
  bookName: string;
  imageUrl: string;
  quantity: number;
}

export interface Order {
  id? : string;
  items: Item[];
  date? : string;
}

export interface OrderResource {
  _id? : string;
  items: ItemResource[];
  date? : string;
}





