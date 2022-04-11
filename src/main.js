import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  // 定义完路由 我们还需要在main.js 加载router
  // 名字一样时可以省略 属性: 的格式 
  // 如果使用import Router from './router' 则需要在new Vue里使用 Router: router 的格式才能加载router
  router,
  render: h => h(App),
}).$mount('#app')
