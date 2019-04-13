<template>
	<div class="input-group">
		<label>{{label}}</label>
		<slot></slot>
	</div>
</template>


<script>
export default {
	name:"InputGroup",
	props:{
		label:String
	}
}
</script>


<style lang="scss" scoped>
	.input-group{
		margin:20px 0;
		font-size:14px;
	}
	label{
		display: inline-block;
		margin-bottom: 3px;
	}
</style>
