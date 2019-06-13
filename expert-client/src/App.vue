<template>
  <div id="app">
	<Navbar/>
	<div class="home">
		<router-view></router-view>
	</div>
	<Footer/>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import {Observer} from "mobx-vue";
import {Component} from "vue-property-decorator";
import Card from "./components/Card.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";



@Observer
@Component({
	components:{Navbar,Footer}
})
export default class App extends Vue {

}
</script>


<style lang="scss">

*{
	margin:0;
	padding:0;
	box-sizing: border-box;
}


#app{
	font-family: 'Comfortaa', cursive;
}

.home{
	min-height: 75vh;
}
</style>
