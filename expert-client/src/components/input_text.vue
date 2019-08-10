<template>
	<div :class="['input-text',{error:showError(field)}]">
		<el-input
			:type="type"
			@input="setValue"
			:value="field.value"
			@blur="field.setDirty"
		/>
		<div v-if="field.dirty" class="errors">
			<div  v-for="error in field.errors" :key="error" class="error_message">
			{{error}}
			</div>
		</div>
	</div>
</template>


<script lang="ts">
import Vue from "vue";
import {Observer} from "mobx-vue";
import {Prop,Component} from "vue-property-decorator";
import {Field} from "../store/field";
import {Input as ElInput} from "element-ui";


@Observer
@Component({components:{ElInput}})
class InputText extends Vue {
	@Prop() field:Field<any>;
	@Prop({default:"text"}) type:string;


	setValue(value:any){
		this.field.setValue(value);
	}
	showError(field:Field<any>){
		return field.dirty && !field.valid;
	}
}

export default InputText;
</script>


<style lang="scss">

	.input-text{
		.errors{
			margin-top:5px;
		}
		.error_message{
			color:red;
		}
	}
	.input-text.error{
		 .el-input .el-input__inner{
			border: 1px solid red;
		}
	}

</style>
