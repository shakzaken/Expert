<template>
    <form-group header="Book Form">
        <div class="book-form">
			<input-group label="Name">
				<input-text :path="BOOK_FORM.NAME" />
			</input-group>
			<input-group label="Description">
				<input-text :path="BOOK_FORM.DESCRIPTION" />
			</input-group>
			<input-group label="Category">
				<input-text :path="BOOK_FORM.CATEGORY_ID" />
			</input-group>
			<input-group label="Image Url">
				<input-text :path="BOOK_FORM.IMAGE_URL" />
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
			console.log("Save book");
		}
	}
}
</script>

