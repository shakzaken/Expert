import {CATEGORY_FORM} from "./types";


export default {
    state: {
        name: ""
    },
    getters:{
        [CATEGORY_FORM.GETTERS.NAME] : (state) => {
            return state.name;
        },
        [CATEGORY_FORM.GETTERS.FORM] : (state) => {
            return state;
        },
        [CATEGORY_FORM.GETTERS.RULES] : (state) => {
            return {
                name: [
                    { required: true, message: 'Please input category name', trigger: 'blur' },
                    { min: 3, max: 255, message: 'Length should be 3 to 255', trigger: 'blur' }
                  ]
            };
        }
    },
    mutations:{
        [CATEGORY_FORM.MUTATIONS.NAME] : (state,name) => {
            state.name = name;
        }
    },
    actions:{

    }
}