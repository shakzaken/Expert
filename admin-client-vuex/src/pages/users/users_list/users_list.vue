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
        <el-table :data="users">
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
                        @click="()=>deleteUser(scope.row.id)">Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
		{{store.usersList.usersList}}
  </div>
</template>

<script>
import {} from "@/types";
import Vue from "vue";
import {UsersModule} from "./users.module";
import {formMixin} from "@/mixins";
import {store1} from "@/store1";


export default Vue.extend({
  name:"UsersList",
  mixins:[formMixin("users",UsersModule)],
  data(){
	  return {
		 // state : store1
		 id:5,
		 store:store1
	  }
  },
  created(){
	  //this.fetchUsers();
	 // state.fetchList();
  }
});
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

