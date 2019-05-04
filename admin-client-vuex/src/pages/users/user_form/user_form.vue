<template>
		
    <form-group header="User Form">
		<input-group label="Name">
			<input-text :value="name" @input="setName"/>
		</input-group>
		<input-group label="Email">
			<input-text :value="email" @input="setEmail" />
		</input-group>
		<input-group label="Passowrd">
			<input-text :value="password" @input="setPassword" />
		</input-group>
		<input-group label="Confirm Password">
			<input-text :value="confirmPassword" @input="setConfirmPassword" />
		</input-group>        
        <el-button class="save-button" type="info" plain round @click="createUser">
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
	}
});
</script>



