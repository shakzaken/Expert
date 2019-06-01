<template>
    <form-group header="User Form">
		<input-group label="Name">
			<input-text :field="state.name"/>
		</input-group>
		<input-group label="Email">
			<input-text :field="state.email" />
		</input-group>
		<input-group  label="Passowrd">
			<input-text :field="state.password" type="password"  />
		</input-group>
		<input-group label="Confirm Password">
			<input-text :field="state.confirmPassword"  type="password"  />
		</input-group>
        <el-button class="save-button" type="info" plain round @click="saveUser">
                Save
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
import { UsersModule } from './users_list/users.module';
import { UserModel } from '../../types';
import {UserModule} from "../../store1/index";



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


}

</script>



