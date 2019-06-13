import axios,{AxiosResponse} from "axios";
import {UserResource,UserModel,BookModel,BookResource, CategoryModel, CategoryResource, AuthSummary} from "@/types";


function mapUserResourceForUserModel(userResource: UserResource) : UserModel {
	return {
		id: userResource._id,
		name: userResource.name,
		email: userResource.email
	};
}

function mapBookResourceToBookModel(bookResource : BookResource) : BookModel {
	return {
		id: bookResource._id,
		name: bookResource.name,
		description: bookResource.description,
		imageUrl: bookResource.imageUrl,
		categoryId: bookResource.categoryId,
		date:bookResource.date
	};
}

function mapCategroyResourceToCategoryModel(categoryResourse: CategoryResource) : CategoryModel {
	return {
		id: categoryResourse._id,
		name: categoryResourse.name
	};
}




const users = {

	async getUsers() : Promise<UserModel[]> {
		const response : AxiosResponse = await axios.get("/users");
		const users:UserModel[] = response.data.map(mapUserResourceForUserModel);
		return users;
	},
	async getUser(id:string) : Promise<UserModel> {
		const response : AxiosResponse = await axios.get(`/users/${id}`);
		const user : UserResource = response.data;
		return mapUserResourceForUserModel(user);
	},
	async createUser(user:UserResource) : Promise<UserModel> {
		const response: AxiosResponse = await axios.post("/users",user);
		const newUser:UserResource = response.data;
		return mapUserResourceForUserModel(newUser);
	},
	async updateUser(id:string,user:UserResource) : Promise<UserModel> {
		const response : AxiosResponse = await axios.put(`/users/${id}`,user);
		const updatedUser : UserResource = response.data;
		return mapUserResourceForUserModel(updatedUser);
	},
	async deleteUser(id:string) : Promise<UserModel> {
		const response : AxiosResponse = await axios.delete(`/users/${id}`);
		const deletedUser : UserResource = response.data;
		return mapUserResourceForUserModel(deletedUser);
	}

}



const books = {
	async getBooks() : Promise<BookModel[]>{
		const response : AxiosResponse = await axios.get("/books");
		const books : BookModel[] = response.data.map(mapBookResourceToBookModel);
		return books;
	},
	async getBook(id:string) : Promise<BookModel> {
		const response : AxiosResponse = await axios.get(`/books/${id}`);
		const book : BookResource = response.data;
		return mapBookResourceToBookModel(book);
	},
	async createBook(book : BookResource) : Promise<BookModel> {
		const response : AxiosResponse = await axios.post("/books",book);
		const createdBook : BookResource = response.data;
		return mapBookResourceToBookModel(createdBook);
	},
	async updateBook(id: string, book : BookResource): Promise<BookModel> {
		const response : AxiosResponse = await axios.put(`/books/${id}`,book);
		const updatedBook : BookResource = response.data;
		return mapBookResourceToBookModel(updatedBook);
	},
	async deleteBook(id:string): Promise<BookModel> {
		const response : AxiosResponse = await axios.delete(`/books/${id}`);
		const deletedBook : BookResource = response.data;
		return mapBookResourceToBookModel(deletedBook);
	}
}


const categories = {
	async getCategories() : Promise<CategoryModel[]>{
		const response : AxiosResponse = await axios.get("/categories");
		const categories : CategoryModel[] = response.data.map(mapCategroyResourceToCategoryModel);
		return categories;
	},
	async createCategory(category: CategoryResource) : Promise<CategoryModel> {
		const response : AxiosResponse = await axios.post("/categories",category);
		const createdCategory : CategoryResource = response.data;
		return mapCategroyResourceToCategoryModel(createdCategory);
	},
	async deleteCategory(id: string) : Promise<CategoryModel> {
		const response : AxiosResponse = await axios.delete(`/categories/${id}`);
		const deletedCategory : CategoryResource = response.data;
		return mapCategroyResourceToCategoryModel(deletedCategory);
	}
}


const auth = {
	async login(loginDetails : AuthSummary) : Promise<string|null>{
		try{
			const result = await axios.post("/auth/login",loginDetails);
			return result.data.token
		}catch(err){
			return null;
		}		
	}

}




export const api = {
	users,books,categories,auth
};