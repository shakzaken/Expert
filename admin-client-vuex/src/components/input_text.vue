<template>
	<el-input
		@change="setValue"
		:value="value"	
	 />
</template>


<script>


export default {
	name:"InputText",
	props:{
		value: String
	},
	methods:{
		setValue(value){
			this.$emit("input",value);
		}
	}

}
</script>


<style lang="scss" scoped>

</style>
