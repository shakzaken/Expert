<template>
  <nav class="navbar">
    <ul class="navbar-list navbar-list-left">
      <li class="navbar-item">
        <router-link to="/" class="navbar-link">Dashboard</router-link>
      </li>
    </ul>
    <ul class="navbar-list navbar-list-right">
      <li class="navbar-item">
        <router-link to="/login" class="navbar-link">Login</router-link>
      </li>
      <li class="navbar-item">
        <a href="#" class="navbar-link">Logut</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: "Navbar"
  

}
</script>

<style lang="scss" scoped>

  .navbar{

    display: flex;
    background: black;
    color: white;
    height:10vh;
    padding: 2rem 0;
    min-height:6.5rem;
    
    font-weight: 500;


    &-list{
     flex: 1;
     display: flex;
     
     &-left{
        justify-content: center;
        font-size:2rem;
     }
     &-right{
       justify-content: center;
       font-size:1.8rem;
     }
    }
    &-item{
      list-style: none;
      margin-left: 2rem;
      
    }
    &-link{
      color: white;
      text-decoration: none;
    }
  }
</style>


