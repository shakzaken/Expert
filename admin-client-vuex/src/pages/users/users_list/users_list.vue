<template>
  <div class="users-list">
        <div class="users-list-header">
            <h3 class="users-list-title">Users list</h3>
            <div class="users-list-button">
                <el-button type="info" plain round>Create User</el-button>
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
        </el-table>
  </div>
</template>

<script>
import {USERS} from "@/types";

export default {
  name:"UsersList",
  created(){
      this.$store.dispatch("users/fetchList");
  },
  computed:{
      users(){
        return this.$store.getters["users/users"];
      }
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

