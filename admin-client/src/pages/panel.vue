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
</div>

</template>

<script>
import navbar from "../components/navbar.vue";
import sidebar from "../components/sidebar.vue";

export default {
  name: "Panel",
  components:{
    navbar,
    sidebar
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
    }
    .sidebar-container{
      flex:1;
    }
  }
</style>
