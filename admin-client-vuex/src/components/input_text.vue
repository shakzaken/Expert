<template>
	<el-input
		@change="setValue"
		:value="getValue"	
	 />
</template>


<script>


export default {
	name:"InputText",
	props:{
		path:String
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

}
</script>


<style lang="scss" scoped>

</style>
