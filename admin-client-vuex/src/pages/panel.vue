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

<script>
import navbar from "../components/navbar.vue";
import sidebar from "../components/sidebar.vue";
import Footer from "../components/footer.vue";
import {} from "@/store1";

export default {
  name: "Panel",
  components:{
    navbar,
    sidebar,
    Footer
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
