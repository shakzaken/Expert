<template>
  <div class="users-list">
        <div class="users-list-header">
            <h3 class="users-list-title">Users list</h3>
            <div class="users-list-button">
				<router-link to="/users/form">
                	<el-button type="info" plain round>Create User</el-button>
				</router-link>
            </div>
        </div>
        <el-table :data="state.list">
            <el-table-column
                prop="name"
                label="Name"
                width="180">
            </el-table-column>
            <el-table-column
                prop="email"
                label="Email"
                width="180">
            </el-table-column>
			<el-table-column
                label="Operations">
                <template slot-scope="scope">
                    <router-link :to="`/users/form/${scope.row.id}`">
                        <el-button size="mini" @click="editUser(scope.row.id)">Edit</el-button>
                    </router-link>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="deleteUser(scope.row.id)">Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
  </div>
</template>

<script lang="ts">

import Vue from "vue";
import {UsersList, UserModule} from "../../store/index";
import {Component} from "vue-property-decorator";
import {Observer} from "mobx-vue";

@Observer
@Component({
  components:{}
})
export default class UsersListComponenet extends Vue {

    get state() : UsersList {
        return this.$root.$data.usersList;
	}
	get userFormState() : UserModule {
		return this.$root.$data.userModule;
	}
	
	created() : void {
		this.state.fetchUsers();
	}
	deleteUser(id:string) : void {
		if(confirm("Are you sure you want to delete this user?")){
			this.state.deleteUser(id);
		}
	}
	editUser(id:string) : void {
		this.userFormState.setEditState(id);
	}
}


</script>


<style lang="scss" scoped>

  .users-list{
        &-header{
            display: flex;
            margin-bottom: 30px;
        }
        &-title{
            flex:1;
            padding-left: 50px;
            padding-top: 10px;
        }
        &-button{
            flex:1;
        }
    }

</style>

