
<template>
  <div id="app">
      
     	<Navbar />
      
      <div class="app-body">
        <Sidebar class="sidebar" />
        <div class="home">Home</div>
      </div>
      <Footer/>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Footer, Navbar, Sidebar} from "./components/general";

@Component({
    components: {
        Footer,                 
        Navbar,
        Sidebar
  },
})
export default class App extends Vue {}
</script>



<style lang="scss">

	#app {
		font-family: 'Quicksand', sans-serif;
		box-sizing: border-box;
		font-size: 1.6rem;
		font-weight: 500;
	
	}
	html{
		font-size: 62.5%;
	}

	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	
	}

	.navbar{
		height: 70px;
	}
	.app-body{
		display: flex;
		//min-height: 65vh;
		.sidebar{
			flex:1;
			min-height: 75vh;
			
		}
		.home{
			flex:5;
		}
		
	}

</style>

