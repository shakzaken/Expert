
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

export default class Auth {

  @observable
  user:UserSummary;
  @observable
  email: Field<string>;
  @observable
  password: Field<string>;
  @observable
  token:string;



  constructor(){
    this.email = new Field(null,[Required,MinLength(3),MaxLength(255)]);
    this.password = new Field(null,[Required,MinLength(3),MaxLength(255)]);

  }

  @action.bound
  async login() : Promise<boolean> {
    try{
      const result : AxiosResponse<LoginResponse> = await axios.post("/auth/login",{
        email: this.email.value,
        password: this.password.value
      });
      this.token = result.data.token;
      this.user = {
        id: result.data.user._id,
        email: result.data.user.email
      };
      return true;
    }catch (err) {
      return false;
    }
  }

  @computed
  get isLogin() : boolean {
    return !!(this.user && this.user.id);
  }


}
