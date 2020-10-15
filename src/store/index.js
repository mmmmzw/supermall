import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建store对象
const store = new Vuex.Store({
	state: {
		cartList: []
	},
	//修改store里的东西都需要经过mutations
	mutations: {
		addCounter(state, payload) {
			payload.count++
		},
		addToCart(state, payload) {
			state.cartList.push(payload)
		}
	},
	actions: {
		addCart(context, payload){
			// let oldProduct = null;
			// for(let item of state.cartList){
			// 	if(item.iid === payload.iid){
			// 		oldProduct = item
			// 	}
			// }
			//数组find()方法
			let oldProduct = context.state.cartList.find(function(item){
				return item.iid === payload.iid
			})
			if(oldProduct){
				// oldProduct.count += 1;
				context.commit('addCounter', oldProduct)
			}else {
				payload.count = 1;
				// payload.checked = true;
				// context.state.cartList.push(payload)
				context.commit('addToCart', payload)
			}
			// state.cartList.push(payload)
			// console.log(payload);
		}
	}
})

//3.挂载
export default store