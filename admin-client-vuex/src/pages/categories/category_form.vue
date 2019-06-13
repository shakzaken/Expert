<template>
    <form-group header="Category Form">
		<input-group label="Name">
			<input-text :field="state.name"/>
		</input-group>
        <el-button class="save-button" type="info" plain round @click="saveCategory">
            Save
        </el-button>
    </form-group>
</template>


<script lang="ts">
import {ERROR_STATUS} from "../../constants/index";
import {FormGroup,InputGroup,InputText} from "../../components/index";
import { mapActions } from 'vuex';
import Vue from "vue";
import {formMixin} from "../../mixins/index"
import {Prop,Component} from "vue-property-decorator";
import { Observer } from 'mobx-vue';
import { CategoryModule } from '../../store';


@Observer
@Component({
	components:{InputGroup,InputText,FormGroup}
})
export default class CategoryForm extends Vue{

	get state() : CategoryModule{
		return this.$root.$data.categoryModule;
	}
	async saveCategory() : Promise<void>{
		await this.state.saveCategory();
		this.$router.push("/categories");
	}

}


</script>




