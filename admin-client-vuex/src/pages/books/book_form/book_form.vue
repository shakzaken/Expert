<template>
    <form-group header="Book Form">
        <div class="book-form">
			<input-group label="Name">
				<input-text :value="name" @input="setName"/>
			</input-group>
			<input-group label="Description">
				<input-text :value="description" @input="setDescription" />
			</input-group>
			<input-group label="Category">
				<select-input
					:value="categoryId"
					@input="setCategoryId"
					:options="categories"
				/>
			</input-group>
			<input-group label="Image Url">
				<input-text :value="imageUrl" @input="setImageUrl" />
			</input-group> 
			<el-button class="save-button" type="info" plain round @click="createBook">
                Save
        	</el-button>       
        </div>
    </form-group>
</template>

<script lang="ts">
import {BOOK_FORM_FIELDS as FIELDS} from "@/types";
import {ERROR_STATUS} from "@/constants";
import {InputGroup,InputText,FormGroup,SelectInput} from "@/components";
import {mapGetters,mapMutations} from "vuex";
import {formMixin} from "@/mixins/form.mixin";
import {BookFormModule} from "./book_form.module";
import Vue from "vue";

export default Vue.extend({
	name:"BookForm",
	mixins:[formMixin("bookForm",BookFormModule)],
	components:{
		InputText,InputGroup,FormGroup,SelectInput
	},
	computed:{
	
	},
	methods:{
	
	},
	created(){
		const editState : boolean = !!this.$route.params.id;
		this.setEditState(editState);
		this.fetchCategories();
		
	}
});
</script>

