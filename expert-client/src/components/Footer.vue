

<template>
    <div class="footer">
        <ul>
            <li>
                shakzaken@gmail.com
            </li>
            <li>
                http://shakapps.com
            </li>
        </ul>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import {Observer} from "mobx-vue";
import {Prop,Component} from 'vue-property-decorator';

@Observer
@Component({

})
export default class Footer extends Vue {

	
}
</script>


<style lang="scss" scoped>

    .footer{
        height: 140px;
        background: rgb(71, 0, 80);
        color: white;
        padding: 40px 300px;
        border-top: 2px solid grey;
        font-size: 16px;
		border-top:3px solid rgb(233, 51, 106);
		
        
    }

    li{
        list-style: none;
    }
</style>