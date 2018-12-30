<template>
  
  <aside class="sidebar">
    <ul class="sidebar-list">
      <li class="sidebar-item">
        <router-link to="/users" class="sidebar-link">Users</router-link>
      </li>
      <li class="sidebar-item">
        <router-link to="/categories" class="sidebar-link">Categories</router-link>
      </li>
      <li class="sidebar-item">
        <router-link to="/books" class="sidebar-link">Books</router-link>
      </li>
      <li class="sidebar-item">
        <router-link to="/orders" class="sidebar-link">Orders</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  

}
</script>


<style lang="scss" scoped>

  .sidebar{
    height:90vh;
    background-color: rgb(226, 226, 226);
    border-right: 2px solid rgb(199, 199, 199);

    &-list{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top:5rem;
      
    }
    &-item{
      list-style: none;
      height: 5rem;
      padding: 2rem 0;
    }
    &-link{
      color: black;
      text-decoration: none;
      font-size:1.8rem;
      font-weight: 500;
    }
  }


</style>

