<template>
  <div class="home">
	  <div class="card" v-for="item in store.items" :key="item.name">
		  <Card @addQuantity="addQuantity" @decreaseQuantity="decreaseQuantity" :item="item"/>
	  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Card from "@/components/Card.vue";
import {Observer} from "mobx-vue";
import  { Item,Store } from "@/store/store";


@Observer
@Component({
  components: {
	  Card
  }
})
export default class Home extends Vue {

	@Prop() store :Store;

	addQuantity(bookId:string){
		this.store.addQuantity(bookId);
	}
	decreaseQuantity(bookId:string){
		this.store.decreaseQuantity(bookId);
	}
	mounted() {
		if(this.store.items.length === 0){
			this.store.fetchBooks();
		}
	}
}
</script>



<style lang="scss" scoped>
	.home{
		padding: 50px 50px;
		display: flex;
		flex-wrap: wrap;

		.card{
			margin:10px;
		}
	}


</style>

