<template>
	<div class="input-text">
		<el-input
			:type="type"
			@input="setValue"
			:value="value"
			:class="{error_input : errorState}"	
		/>
		<div v-for="error in errors" :key="error" class="error_message">
			{{error}}
		</div>
	</div>
</template>


<script>
import Vue from "vue";

export default Vue.extend({
	name:"InputText",
	props:{
		value: String,
		password: Boolean,
		type:{
			type: String,
			default:"text"
		},
		errors: {
			type:Array,
			default:() => []
		}
	},
	methods:{
		setValue(value){
			this.$emit("input",value);
		}
	},
	computed:{
		errorState(){
			this.errors.length > 0;
		}
	}

});
</script>


<style lang="scss" scoped>
	.input-text{
		.error_message{
			color:red;
		}
		>>> .el-input__inner{
			border: 1px solid red;
			color:red;
		}
	}
	
</style>
