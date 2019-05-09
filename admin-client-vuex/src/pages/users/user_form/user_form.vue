<template>	
    <form-group header="User Form">
		<input-group label="Name">
			<input-text :value="name" @input="setName" :errors="name_errors"/>
		</input-group>
		<input-group label="Email">
			<input-text :value="email" @input="setEmail" :errors="email_errors" />
		</input-group>
		<input-group v-if="!getEditState" label="Passowrd">
			<input-text :value="password" @input="setPassword" type="password" :errors="password_errors" />
		</input-group>
		<input-group v-if="!getEditState" label="Confirm Password">
			<input-text :value="confirmPassword" @input="setConfirmPassword" type="password" :errors="confirmPassword_errors" />
		</input-group>        
        <el-button class="save-button" type="info" plain round @click="saveUser">
                Save
        </el-button>
    </form-group>
</template>

<script>
import {ERROR_STATUS} from "@/constants";
import {FormGroup,InputGroup,InputText} from "@/components";
import Vue from "vue";
import {UserFormModule} from "./user_form.module";
import {formMixin} from "@/mixins";

export default Vue.extend({
	name: "User-Form",
	mixins:[formMixin("userForm",UserFormModule)],
	components:{
		FormGroup,InputGroup,InputText	
	},
	created(){

		this.clearDirtyFields();
		if (this.$route.params.id){
			this.setEditState(true);	
		}else{
			this.setEditState(false);
			this.clearForm();
			this.setFields();
		}
	}
});
</script>



