<template>
    <div class="category-form">
        <el-form :model="form" :rules="rules" ref="categoryForm" label-width="120px">
            <el-form-item label="Name" prop="name">
                <el-input v-model="name"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
import {CATEGORY_FORM} from "../../store/types";

export default {
    name:"CategoryForm",
    computed:{
        rules(){
            return this.$store.getters[CATEGORY_FORM.GETTERS.RULES];
        },
        name:{
            get() {
                return this.$store.getters[CATEGORY_FORM.GETTERS.NAME];
            },
            set(name) {
                this.$store.commit(CATEGORY_FORM.MUTATIONS.NAME,name);
            }
        },
        form(){
            return this.$store.getters[CATEGORY_FORM.GETTERS.FORM];
        }
    }
}
</script>

<style lang="scss" scoped>
    .category-form{
        width:80%;
    }
</style>


