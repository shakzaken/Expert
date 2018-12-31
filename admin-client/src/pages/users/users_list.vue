<template>
  <div>
    <h2>Users List</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.email">
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {USERS} from "../../store/types.js";

export default {
  name:"UsersList",
  created(){
      this.$store.dispatch(USERS.ACTIONS.FETCH_LIST);
  },
  computed:{
      users(){
        return this.$store.getters[USERS.GETTERS.LIST];
      }   
  }
   
}
</script>





<style lang="scss" scoped>

  h2{
    margin-bottom: 4rem;
  }
  table{
    width: 60%;
    text-align: left;
    padding: 20px;
    border: 1px solid rgb(189, 189, 189);
  }

  th{
    width: 5%;
    
  }
  td{
    height: 4rem;
  }

</style>

