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

