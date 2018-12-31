<template>
  <div>
    categories list
  </div>
</template>

<script>
import {CATEGORIES} from "../../store/types";

export default {
    name: "CategoriesList",
    created(){
        this.$store.dispatch(CATEGORIES.ACTIONS.FETCH_LIST);
    }
}
</script>
