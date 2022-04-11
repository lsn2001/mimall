// 路由封装
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

Vue.use(Router);//  加载插件

// 导入对象
export default new Router({
    routes: [
        {
            // index、product、detail三个页面需要用到同一个头部和底部，所以他们同为home的子路由
            // redirect为重定向 这里定义index为首页
            path: '/',
            name: 'home',
            component: Home,
            redirect:'/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    // :变量名 的格式 可以获取动态的路径
                    path: '/product/:id',
                    name: 'product',
                    component: Product,
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                path: 'list',
                name: 'order-list',
                component:OrderList,
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component:OrderConfirm,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component:OrderPay,
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component:AliPay,
                }
            ]
        },
        
    ]
});