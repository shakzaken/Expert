<template>
    <form-group header="User Form">
		<input-group label="Name">
			<input-text :field="state.name"/>
		</input-group>
		<input-group label="Email">
			<input-text :field="state.email" />
		</input-group>
		<input-group v-if="!state.editState"  label="Passowrd">
			<input-text :field="state.password" type="password"  />
		</input-group>
		<input-group v-if="!state.editState" label="Confirm Password">
			<input-text :field="state.confirmPassword"  type="password"  />
		</input-group>
        <el-button class="save-button" type="info" plain round @click="saveUser">
                {{buttonMessage(this.state.editState)}}
        </el-button>
    </form-group>
</template>

<script lang="ts">
import {ERROR_STATUS} from "../../constants/index";
import {FormGroup,InputGroup,InputText} from "../../components/index";
import Vue from "vue";
import {formMixin} from "../../mixins/index";
import {Prop,Component} from "vue-property-decorator";
import {Observer} from "mobx-vue";
import { UserModel } from '../../types';
import {UserModule} from "../../store/index";



@Observer
@Component({
	components:{FormGroup,InputGroup,InputText}
})
export default class UserForm extends Vue {

	async saveUser() : Promise<void> {
		await this.state.saveUser();
		this.$router.push("/users");
	}


	get state() : UserModule {
		return this.$root.$data.userModule;
	}
	buttonMessage(editState: boolean){
		return editState ? "Update" : "Save";
	}

	destroyed(){
		this.state.clearUserForm();
	}


}

</script>



