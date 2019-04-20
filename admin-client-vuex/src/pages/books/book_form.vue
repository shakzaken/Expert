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
				<input-text path="bookForm/categoryId" />
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
import {InputGroup,InputText,FormGroup} from "../../components";

export default {
	name:"BookForm",
	components:{
		InputText,InputGroup,FormGroup
	},
	computed:{
		BOOK_FORM(){
			return BOOK_FORM;
		}
	},
	methods:{
		saveBook(){
			/*
			TODO 
			*/
			this.$store.dispatch("bookForm/createBook");
		}
	}
}
</script>

