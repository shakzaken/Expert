## Expert documentation

- Users
  - [Users Model](#users-model)
  - [Users Route](#users-route)
  - [Users Validations](#users-validations)
- Categories
  - [Categories Model](#categories-model)
  - [Categories Route](#categories-route)
  - [Categories Validations](#categories-validations)
- Books
  - [Books Model](#books-model)
  - [Books Route](#books-route)
  - [Books Validations](#books-validations)



### Users Model

  - name 
    - String
    - required
    - min length 3
    - max length 255
  - password 
    - String 
    - required
    - min length 4
    - max length 512
  - email 
    - String 
    - required
    - email-validation
    - min length 5
    - max length 512
    - unique


### Categories Model

  - name
    - String
    - required
    - min length 3
    - max length 255
    - unique


### Books Model 

  - name
    - String
    - required
    - min length 3
    - max length 255
    - unique
  - description
    - String
    - required
    - min length 5
    - max length 512
  - imageUrl
    - String
    - required
    - min length 5
    - max length 512
  - date 
    - Date
    - default 
     
    



