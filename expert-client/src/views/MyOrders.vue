<template>
	<div>
		My Orders
	</div>
</template>



<script lang="ts">
import Vue from 'vue'
import {Observer} from "mobx-vue";
import {Component} from "vue-property-decorator";




@Observer
@Component({})
export default class MyOrders extends Vue {
	
}



</script>


