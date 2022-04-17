import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

let arr1 = ['a', 'b', 'c', 'd', 'e']
arr1.forEach((value, index) => {
	console.info(index + '-----' + value);
})

