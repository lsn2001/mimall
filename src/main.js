import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios' // 可以将axios对象挂载到Vue实例上
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'


// import env from './env'

const mock = false;
if (mock) {
  // 这里需要用require 不用import import是预编译加载，编译的时候就会加载 而我们不希望永远被拦截
  require('./mock/api');
}

// 根据前端跨域的方式做调整  /a/b : /api/a/b => /a/b
/* 

    如果前后端的地址都为同一个地址 则只需要设置成 /api
    如果前后端地址不一致，则需要写上完整的地址路径

*/



// 通过easy-mock平台实现数据mock 把baseURL设置easy-mock网站上的baseURL
// axios.defaults.baseURL = ' https://mock.mengxuegu.com/mock/625dab8266abf914b1f1c0d6/mimall';


axios.defaults.baseURL = '/api';
// 设置超时时间 8000毫秒 = 8秒
axios.defaults.timeout = 8000; 

// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

//如果需要拦截请求信息 则使用axios.interceptors.request.use()

// 接口错误拦截
axios.interceptors.response.use(function (response) {
   // response.data 才是获取到的值
  let res = response.data;
  // 获取哈希路由 哈希路由的形式是#/为前缀的 
  let path = location.hash;
  // 状态码等于0为成功
  if (res.status == 0) {
    return res.data;
  }
  // 状态码等于10 未登录成功 这个状态码是前后端共同规定的 可以改变
  else if(res.status == 10)
  {
    if (path !='#/index')
    // 未登录则跳转到登录页面
      window.location.href = '/#/login';  // 需要完整路径
      return Promise.reject(res);
  }
  else {
    return Promise.reject(res);
  }
})

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
// 图片加载过程中会有加载动画
Vue.use(VueLazyload, {
  loading:'/imgs/loading-svg/loading-bubbles.svg'
});
new Vue({
  // 定义完路由 我们还需要在main.js 加载router
  // 名字一样时可以省略 属性: 的格式 
  // 如果使用import Router from './router' 则需要在new Vue里使用 Router: router 的格式才能加载router
  router,
  store,
  render: h => h(App),
}).$mount('#app')
