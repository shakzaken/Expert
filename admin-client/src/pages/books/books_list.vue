<template>
  <div>
    books list
  </div>
</template>

<script>
import {BOOKS} from "../../store/types";

export default {
    name: "BooksList",
    created(){
        this.$store.dispatch(BOOKS.ACTIONS.FETCH_LIST);
    }
}
</script>


