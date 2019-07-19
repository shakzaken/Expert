
import {Field} from "@/store/field";
import {computed, observable,action} from "mobx";
import {MaxLength,MinLength,Required} from "./validators";
import axios, {AxiosResponse} from "axios";
import {User,UserResource} from "@/store/types";

interface LoginResponse {
  user: UserResource;
  token: string;
}

interface UserSummary {
  id:string;
  email:string;
}

export default class Users {


  @observable
  email: Field<string>;
  @observable
  password: Field<string>;
  @observable
  confirmPassword: Field<string>;
  @observable
  name: Field<string>;




  constructor(){
    this.name = new Field(null,[Required,MinLength(3),MaxLength(255)]);
    this.email = new Field(null,[Required,MinLength(3),MaxLength(255)]);
    this.confirmPassword = new Field(null,[Required,MinLength(3),MaxLength(255)]);
    this.password = new Field(null,[Required,MinLength(3),MaxLength(255)]);
  }

  @action.bound
  async register() : Promise<UserResource> {
    return axios.post("/users",this.userData);
  }

  get userData() : UserResource {
    return {
      email: this.email.value,
      name: this.name.value,
      password: this.password.value,
    };
  }


  @action.bound
  clearForm(){
    this.email.clearField();
    this.name.clearField();
    this.password.clearField();
    this.confirmPassword.clearField();
  }



}
