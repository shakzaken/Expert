<template>
	<el-select 
		:value="value"
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
		value:String
	},
	methods:{
		setValue(value){
			this.$emit("input",value);
		}
	}
});
</script>



<style lang="scss" scoped>

</style>

