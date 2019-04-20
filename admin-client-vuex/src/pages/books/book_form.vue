<template>
    <form-group header="Book Form">
        <div class="book-form">
			<input-group label="Name">
				<input-text path="bookForm/name" />
			</input-group>
			<input-group label="Description">
				<input-text path="bookForm/description" />
			</input-group>
			<input-group label="Category">
				<select-input
					path="bookForm/categoryId"
					:options="categories"
				/>
			</input-group>
			<input-group label="Image Url">
				<input-text path="bookForm/imageUrl" />
			</input-group> 
			<el-button class="save-button" type="info" plain round @click="saveBook">
                Save
        	</el-button>       
        </div>
    </form-group>
</template>

<script>
import {BOOK_FORM} from "../../store/types";
import {ERROR_STATUS} from "../../constants";
import {InputGroup,InputText,FormGroup,SelectInput} from "../../components";

export default {
	name:"BookForm",
	components:{
		InputText,InputGroup,FormGroup,SelectInput
	},
	computed:{
		categories(){
			return this.$store.getters["bookForm/categories"];
		}
	},
	methods:{
		saveBook(){
			this.$store.dispatch("bookForm/createBook");
		}
	},
	created(){
		this.$store.dispatch("bookForm/fetchCategories");
	}
}
</script>

