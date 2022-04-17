<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name: 'App',
  components: {
    
  },
  mounted(){
     //storage.setItem('username',{"name":"jack"},'user'); 
     //storage.setItem('sex',1);
     //storage.clear("sex",'user');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
