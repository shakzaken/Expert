import Vuex from 'vuex';
import UsersModule from "./users.module";


const store = new Vuex.Store({

  modules:{
    users: UsersModule
  }
});