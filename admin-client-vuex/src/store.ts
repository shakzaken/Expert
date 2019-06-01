import Vuex from 'vuex';
import Vue from 'vue';

import {StoreOptions} from "vuex";


Vue.use(Vuex);

export interface RootState  {

}

export const store : StoreOptions<RootState> = new Vuex.Store({


});

