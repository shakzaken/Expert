<template>
	<div class="input-text">
		<el-input
			:type="type"
			@input="setValue"
			:value="field.value"
		/>
		<!--
		<div v-for="error in errors" :key="error" class="error_message">
			{{error}}
		</div>
		-->
	</div>
</template>


<script lang="ts">
import Vue from "vue";
import {Observer} from "mobx-vue";
import {Prop,Component} from "vue-property-decorator";
import {Field} from "@/store1";


@Observer
@Component({})
class InputText extends Vue {
	@Prop() field:Field<any>;
	@Prop({default:"text"}) type:string;


	setValue(value:any){
		this.field.setValue(value);
	}
}

export default InputText;
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
