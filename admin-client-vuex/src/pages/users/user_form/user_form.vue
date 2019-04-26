<template>
    <form-group header="User Form">
		<input-group label="Name">
			<input-text :path="USERS_FORM.NAME" />
		</input-group>
		<input-group label="Email">
			<input-text :path="USERS_FORM.EMAIL" />
		</input-group>
		<input-group label="Passowrd">
			<input-text :path="USERS_FORM.PASSWORD" />
		</input-group>
		<input-group label="Confirm Password">
			<input-text :path="USERS_FORM.CONFIRM_PASSWORD" />
		</input-group>        
        <el-button class="save-button" type="info" plain round @click="saveUser">
                Save
        </el-button>
    </form-group>
</template>

<script>
import {USERS_FORM} from "@/types";
import {ERROR_STATUS} from "@/constants";
import {FormGroup,InputGroup,InputText} from "@/components";


export default {
	name: "User-Form",
	components:{
		FormGroup,InputGroup,InputText	
	},
    computed:{
        USERS_FORM(){
			return USERS_FORM;
		}
	},
	methods:{
		saveUser(){
			
		}
	}
}
</script>



