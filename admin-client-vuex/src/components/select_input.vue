<template>
	<el-select 
		:value="field.value"
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

import {Observer} from "mobx-vue";
import {Component,Prop} from "vue-property-decorator";
import Vue from "vue";
import {Field} from "@/store";

interface Option {
	id:any;
	name: string;
}


@Observer
@Component({})
export default class SelectInput extends Vue{
	@Prop() field:Field<any>;
	@Prop() options: Option[];

	setValue(value: any){
		this.field.setValue(value);
	}

}

</script>



<style lang="scss" scoped>

</style>

