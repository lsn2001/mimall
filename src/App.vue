<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return {
      
    }
  },
  mounted(){
     this.getUser();
     this.getCartCount();
  },
  methods:{
    // res需要初始化避免 未登录或者购物车没商品时传入接口时 程序报错
    getUser(){
      this.axios.get('./user').then((res={})=>{
        // 将接口的值保存到vuex中去
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('./carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
