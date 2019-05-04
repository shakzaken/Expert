<template>
    <form-group header="Category Form">
		<input-group label="Name">
			<input-text :value="name" @input="setName"/>
		</input-group>
        <el-button class="save-button" type="info" plain round @click="createCategory">
            Save      
        </el-button>
    </form-group>
</template>


<script lang="ts">
import {ERROR_STATUS} from "@/constants";
import {FormGroup,InputGroup,InputText} from "@/components";
import { mapActions } from 'vuex';
import Vue from "vue";
import {formMixin} from "@/mixins"
import {CategoryFormModule} from "./category_form.module"; 

export default Vue.extend({
	mixins:[formMixin("categoryForm",CategoryFormModule)],
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
});
</script>




