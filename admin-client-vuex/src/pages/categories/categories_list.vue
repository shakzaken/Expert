<template>
  <div class="categories-list">
        <div class="categories-list-header">
            <h3 class="categories-list-title">Categories list</h3>
            <div class="categories-list-button">
                <router-link to="/categories/form">
                    <el-button type="info" plain round>Create Category</el-button>
                </router-link>
            </div>
        </div>
        <el-table :data="state.list">
            <el-table-column
                prop="name"
                label="Name"
                width="180">
            </el-table-column>
               <el-table-column
                    label="Operations">
                    <template slot-scope="scope">

                        <el-button
							size="mini"
							type="danger"
							@click="handleDelete(scope.row.id)">Delete
						</el-button>
                    </template>
                </el-table-column>
        </el-table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {} from "../../types";
import {Observer} from "mobx-vue";
import {Component} from "vue-property-decorator";

@Observer
@Component({
  components:{}
})
export default class categoriesListComponent extends Vue {

  get state(){
    return this.$root.$data.categoriesList;
  }
}


</script>



<style lang="scss" scoped>
    .categories-list{
        &-header{
            display: flex;
            margin-bottom: 30px;
        }
        &-title{
            flex:1;
            padding-left: 50px;
            padding-top: 10px;

        }
        &-button{
            flex:1;
        }
    }
</style>
