<template>
    <form-group header="Book Form">
        <div class="book-form">
			<input-group label="Name">
				<input-text :field="state.name"/>
			</input-group>
			<input-group label="Description">
				<input-text :field="state.description" />
			</input-group>
			<!--
			<input-group label="Category">
				<select-input
					:value="categoryId"
					@input="setCategoryId"
					:options="categories"
				/>
			</input-group>
			-->
			<input-group label="Image Url">
				<input-text :field="state.imageUrl" />
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
import {BookModule} from "@/store1";
import {Prop,Component} from "vue-property-decorator";
import {Observer} from "mobx-vue";


@Observer
@Component({
	components: {InputText,InputGroup,FormGroup,SelectInput}
})
class BookForm extends Vue{

	get state() : BookModule {
		return this.$root.$data.bookModule;
	}
	
}

export default BookForm;

</script>

