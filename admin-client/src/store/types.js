

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
    GETTERS:{
        NAME: "CATEGORY_FORM_GETTERS_NAME",
        RULES: "CATEGORY_FORM_GETTERS_RULES",
        FORM: "CATEGORY_FORM_GETTERS_FROM"
    },
    MUTATIONS:{
        NAME: "CATEGORY_FORM_MUTATIONS_SET_NAME",
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

    GETTERS:{
      NAME:         "BOOK_FORM_GETTERS_NAME",
      DESCRIPTION:  "BOOK_FORM_GETTERS_DESCRIPTION",
      CATEGORY_ID:  "BOOK_FORM_GETTERS_CATEGORY_ID",
      IMAGE_URL:    "BOOK_FORM_GETTERS_IMAGE_URL",
      CATEGORIES:   "BOOK_FORM_GETTERS_CATEGORIES",
      RULES:        "BOOK_FORM_GETTERS_RULES",
      FORM_DATA:    "BOOK_FORM_GETTERS_FORM_DATA"
    },
    MUTATIONS:{ 
      SET_NAME:         "BOOK_FORM_MUTATIONS_SET_NAME",
      SET_DESCRIPTION:  "BOOK_FORM_MUTATIONS_SET_DESCRIPTION",
      SET_CATEGORY_ID:  "BOOK_FORM_MUTATIONS_SET_CATEGORY_ID",
      SET_IMAGE_URL:    "BOOK_FORM_MUTATIONS_SET_IMAGE_URL",
      SET_CATEGORIES:   "BOOK_FORM_MUTATIONS_SET_CATEGORIES",
      CLEAR_FORM:       "BOOK_FORM_MUTATIONS_CLEAR_FORM",
      SET_BOOK_DATA:    "BOOK_FORM_MUTATIONS_SET_BOOK_DATA"

    },
    ACTIONS:{
      FETCH_CATEGORIES:   "BOOK_FORM_ACTIONS_FETCH_CATEGORIS",
      SAVE_BOOK:          "BOOK_FORM_ACTIONS_SAVE_BOOK",
      OPEN_EDIT_FORM:     "BOOK_FORM_ACTIONS_OPEN_EDIT_FORM"
    }
};



