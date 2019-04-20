<template>
	<el-select 
		:value="getValue"
		@input="setValue"
		placeholder="Select">
		<el-option 
			v-for="option in options" 
			:key="option.id"
			:value="option.id"
			:label="option.name">		
		</el-option>
	</el-select>
</template>



<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name:"selectInput",
	props:{
		options: Array,
		path: String
	},
	computed:{
		getValue(){
			return this.$store.getters[this.path];
		}
	},
	methods:{
		setValue(value){
			this.$store.commit(this.path,value);
		}
	}
});
</script>



<style lang="scss" scoped>

</style>

