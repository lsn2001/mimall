<template>
    <div>
        <order-header></order-header>
        OrderHeader
        <nav-footer></nav-footer>
        
    </div>
</template>



<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter.vue'
    export default{
        name:'order',
        components:{
            OrderHeader,
            NavFooter
        }
        
    }

</script>