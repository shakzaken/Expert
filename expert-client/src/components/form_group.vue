<template>
	<div class="form-group">
		<h4 class="header">{{header}}</h4>
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
		&-body{
			width:50%;
		}
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
