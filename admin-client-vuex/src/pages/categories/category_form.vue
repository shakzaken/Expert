<template>
    <form-group header="Category Form">
		<input-group label="Name">
			<input-text path="categoryForm/name"/>
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
import { mapActions } from 'vuex';

export default {
	name:"CategoryForm",
	components:{
		InputGroup,InputText,FormGroup
	},
    computed:{
       
    },
    methods:{
        createCategory(){       
			this.$store.dispatch("categoryForm/createCategory");
        }
    }
}
</script>




