import Vue from "vue";
import { Alert,Button,Table,TableColumn,Form,FormItem,Select,Input,Message,Option} from 'element-ui';   

 export default function(){
    Vue.component(Button.name,Button);
    Vue.component(Alert.name,Alert);
    Vue.component(Table.name,Table);
    Vue.component(TableColumn.name,TableColumn);
    Vue.component(Form.name,Form);
    Vue.component(FormItem.name,FormItem);
    Vue.component(Select.name,Select);
    Vue.component(Input.name,Input);
    Vue.component(Option.name,Option);
    Vue.prototype.$message = Message;
 }
 
    


