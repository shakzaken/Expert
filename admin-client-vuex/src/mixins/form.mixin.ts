import { Module,mapActions,mapGetters,mapMutations } from "vuex";



export function formMixin(modulePath:string ,module : Module<any,any>){
	const gettersNames = Object.getOwnPropertyNames(module.getters);
	const mutationsNames = Object.getOwnPropertyNames(module.mutations);
	const actionsNames = Object.getOwnPropertyNames(module.actions);
	

	const formMixin  = {
		computed:{
			...mapGetters(modulePath,gettersNames)
		},
		methods:{
			...mapMutations(modulePath,mutationsNames),
			...mapActions(modulePath,actionsNames)
		}
	}
	return formMixin;
}