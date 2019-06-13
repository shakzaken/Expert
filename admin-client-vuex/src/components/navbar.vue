<template>
  <nav class="navbar">
    <ul class="navbar-list navbar-list-left">
      <li class="navbar-item">
        <router-link to="/" class="navbar-link">Dashboard</router-link>
      </li>
    </ul>
    <ul class="navbar-list navbar-list-right">
      <li v-if="!authState.isLogin" class="navbar-item">
        <router-link to="/login" class="navbar-link">Login</router-link>
      </li>
	  <li v-if="authState.isLogin" class="navbar-item">
        {{authState.email.value}}
      </li>
      <li class="navbar-item" v-if="authState.isLogin">
        <a href="#" class="navbar-link" @click="authState.logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {Observer} from "mobx-vue";
import {Component} from "vue-property-decorator";
import Vue from "vue";
import AuthModule from '../store/authModule';


@Observer
@Component({
	components:{}
})
export default class Navbar extends Vue {

	get authState() : AuthModule {
		return this.$root.$data.authModule;
	}

}

</script>

<style lang="scss" scoped>

  .navbar{

    display: flex;
    background: rgb(0, 0, 0);
    color: white;
    height:12vh;
    padding: 2rem 0;
    min-height:6.5rem;
	border-bottom: 4px solid rgb(233, 51, 106);
    
    font-weight: 500;


    &-list{
     flex: 1;
     display: flex;
     
     &-left{
        justify-content: center;
        font-size:1.8rem;
     }
     &-right{
       justify-content: center;
       font-size:1.8rem;
     }
    }
    &-item{
      list-style: none;
      margin-left: 1.8rem;
      
    }
    &-link{
      color: white;
      text-decoration: none;
    }
  }
</style>


