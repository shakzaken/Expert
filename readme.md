# Expert documentation

- Users
  - [Users Model](#users-model)
  - [Users API](#users-api)
  - [Users API Validations](#users-api-validations)
- Categories
  - [Categories Model](#categories-model)
  - [Categories API](#categories-api)
  - [Categories API Validations](#categories-api-validations)
- Books
  - [Books Model](#books-model)
  - [Books API](#books-api)
  - [Books API Validations](#books-api-validations)



## Users Model

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
    - password will be hashed
  - email 
    - String 
    - required
    - email-validation
    - min length 5
    - max length 512
    - unique

## Users API

### post /users

Request should include an object in this pattern
```javascript
const user = {
  name: String,
  email: String,
  password: String
}
```
Create a user and return the result to the client.

* Request body should be validated according to the User Model.
* If email is already exists send 400 to the client with appropiate message.
* Hash the password and save the hashed version in the database.

### delete /users/:id

Delete a user from the database.

Request body should include valid id.

* If the id is invalid send 400 back to the client.

### get /users
  Return all of the users to the client.

### put /users

Request should include an object in this pattern
```javascript
const user = {
  name: String
}
```
Update User name and send the result to the client.

* name property should be valid according to the User model.



## Categories Model

  - name
    - String
    - required
    - min length 3
    - max length 255
    - unique


## Categories API
  
### post: /categories 

Request should include an object in this pattern 
```javascript
const request = {
   name: String
};
```
Create category in the server and return the result to the user.

* If the name is alreay exists in the database , return 400 with appropiate message to the user.
* Valid body according to the Model.
   
### delete: /categories/:id

Request should include valid id.
If the id is invalid return 400;

### get: /categories 
Return all of the categories.

## Books Model 

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

  - CategoryId
    - ObjectId
    - required

  - date 
    - Date
    - default 

    
## Books API

### post /books

Create a book in the server and return it to the client.

Request body should be an object in this pattern
```javascript
const book = {
  name: String,
  description: String,
  imageUrl: String,
  categoryId: String
}
```
* Request body should be validated according to the Book Model.
* If the name already exists in the database return 400.


### delete /books/:id

Delete a book from the server according to the id parameter.

Request should include a valid id.

### put /books/:id

Update a book in the server.

Request should include a valid id parameter and the body should be an object in this pattern
```javascript
const book = {
  name: String,
  description: String,
  imageUrl: String,
  categoryId: String
}
```
* Validate the request body according to the Book Model.
* If the name in the request body is already exists and is not the same as the name of the current book, return 400 with appropriate message.

### get /books

Return all the books to the client.