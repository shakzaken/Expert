<template>
    <form-group header="Category Form">
		<input-group label="Name">
			<input-text :path="CATEGORY_FORM.NAME"/>
		</input-group>
        <el-button class="save-button" type="info" plain round @click="createCategory">
            Save      
        </el-button>
    </form-group>
</template>


<script>
import {CATEGORY_FORM} from "../../store/types";
import {ERROR_STATUS} from "../../constants";
import {FormGroup,InputGroup,InputText} from "../../components";

export default {
	name:"CategoryForm",
	components:{
		InputGroup,InputText,FormGroup
	},
    computed:{
        CATEGORY_FORM(){
			return CATEGORY_FORM;
		}  
    },
    methods:{
        createCategory(){       
			/*
			TODO Create category
			*/
			console.log("Create Category");
        }
    }
}
</script>




