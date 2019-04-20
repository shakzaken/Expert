


export const BOOK_FORM_FIELDS = ['id','name','description','imageUrl','categoryId','categories'];



export interface BookFormState {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	categoryId: string;
	categories: string[];
}












export const USERS =  {

  GETTERS:{
    LIST:         "USERS_GETTERS_LIST"
  },
  MUTATIONS:{
    SET_LIST:     "USERS_MUTATIONS_SET_LIST"
  },
  ACTIONS:{
    FETCH_LIST:   "USERS_ACTIONS_FETCH_LIST"
  }

};



export const USERS_FORM = {

	NAME:             "USERS_FORM_NAME",
	EMAIL:            "USERS_FORM_EMAIL",
	RULES:            "USERS_FORM_RULES",
	PASSWORD:         "USERS_FORM_PASSWORD",
	CONFIRM_PASSWORD: "USERS_FORM_CONFIRM_PASSWORD",

    GETTERS:{
      FORM_DATA:        "USERS_FORM_GETTERS_FORM_DATA"
    },
    MUTATIONS:{ 
      CLEAR_FORM:           "USERS_FORM_MUTATIONS_CLEAR_FORM",
      SET_USER_DATA:        "USERS_FORM_MUTATIONS_SET_BOOK_DATA"
    },
    ACTIONS:{
      CREATE_USER:          "USERS_FORM_ACTIONS_CREATE_BOOK",
      UPDATE_USER:          "USERS_FORM_ACTIONS_UPDATE_BOOK",
      OPEN_EDIT_FORM:     "USERS_FORM_ACTIONS_OPEN_EDIT_FORM"
    }
};




 
export const CATEGORIES = {

  GETTERS:{
    LIST:         "CATEGORIES_GETTERS_LIST"
  },
  MUTATIONS:{
    SET_LIST:     "CATEGORIES_MUTATIONS_SET_LIST"
  },
  ACTIONS:{
    FETCH_LIST:   "CATEGORIES_ACTIONS_FETCH_LIST",
    DELETE_CATEGORY: "CATEGORIES_ACTIONS_DELETE_CATEGORY"
  }
};

export const CATEGORY_FORM = {
  
	NAME: "CATEGORY_FORM_NAME",
   
    MUTATIONS:{
        CLEAR_FORM: "CATEGORY_FORM_MUTATIONS_CLEAR_FORM"
    },
    ACTIONS:{
        CREATE_CATEGORY: "CATEGORY_FORM_CREATE_CATEGORY"
    }
}

export const BOOKS = {

    GETTERS:{
      LIST:         "BOOKS_GETTERS_LIST"
    },
    MUTATIONS:{
      SET_LIST:     "BOOKS_MUTATIONS_SET_LIST"
    },
    ACTIONS:{
      FETCH_LIST:   "BOOKS_ACTIONS_FETCH_LIST",
      DELETE_BOOK:  "BOOKS_ACTIONS_DELETE_BOOK"
    }
};

export const BOOK_FORM = {

	NAME:"BOOK_FORM_NAME",
	DESCRIPTION:  "BOOK_FORM_DESCRIPTION",
	CATEGORY_ID:  "BOOK_FORM_CATEGORY_ID",
	IMAGE_URL:    "BOOK_FORM_IMAGE_URL",
	CATEGORIES:   "BOOK_FORM_CATEGORIES",
	RULES:        "BOOK_FORM_RULES",
	FORM_DATA:    "BOOK_FORM_FORM_DATA",
	IS_EDIT:      "BOOK_FORM_IS_EDIT",

    GETTERS:{
      IS_EDIT:      "BOOK_FORM_GETTERS_IS_EDIT"
    },
    MUTATIONS:{ 
      CLEAR_FORM:       "BOOK_FORM_MUTATIONS_CLEAR_FORM",
      SET_EDIT_STATE:   "BOOK_FORM_MUTATIONS_SET_EDIT_STATE"
    },
    ACTIONS:{
      FETCH_CATEGORIES:   "BOOK_FORM_ACTIONS_FETCH_CATEGORIS",
      CREATE_BOOK:          "BOOK_FORM_ACTIONS_CREATE_BOOK",
      UPDATE_BOOK:          "BOOK_FORM_ACTIONS_UPDATE_BOOK",
      OPEN_EDIT_FORM:     "BOOK_FORM_ACTIONS_OPEN_EDIT_FORM"
    }
};



