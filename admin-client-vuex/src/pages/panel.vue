<template>
    <div class="panel">
        <navbar/>
        <div class="panel-body">
            <div class="sidebar-container">
                <sidebar/>
            </div>
            <div class="dashboard-container">
                <router-view></router-view>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script lang="ts">
import Navbar from "../components/navbar.vue";
import Sidebar from "../components/sidebar.vue";
import Footer from "../components/footer.vue";
import Vue from "vue";
import {Observer} from "mobx-vue";
import {Component} from "vue-property-decorator";

/*
export default {
  name: "Panel",
  components:{
    navbar,
    sidebar,
    Footer
  }
}
*/   


@Observer
@Component({
	components:{
		Navbar,Sidebar,Footer
	}
})
export default class Panel extends Vue {

	created(){
		this.$root.$data.authModule.autoLogin();
	}
}
</script>

<style lang="scss" scoped>

  .panel{
    &-body{
      display: flex;
    }

    .dashboard-container{
      margin-left: 10rem;
      margin-top: 5rem;
      flex:5;
      padding-bottom: 10rem;
      min-height: 80vh;
    }
    .sidebar-container{
      flex:1; 
    }
  }
</style>
