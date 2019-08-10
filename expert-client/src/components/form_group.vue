<template>
	<div class="form-group">
		<h2 class="header">{{header}}</h2>
		<div class="form-group-body">
			<slot></slot>
		</div>
	</div>
</template>


<script>
export default {
	name:"FormGroup",
	props:{
		header:String
	}
}
</script>

<style lang="scss" scoped>
	.form-group{
		background-color: #f1f1f1;
		display: inline-block;
		border-radius: 20px;
		width:40%;
		padding:30px;

    }
    .header{
        margin-bottom: 30px;
        margin-left:100px;
    }
	.save-button{
        display: inline-block;
        margin-left:30%;
    }
</style>
