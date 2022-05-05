<template>
    <div class="order-header">
        <!-- 在添加浮动的父元素上添加clearfix 可以清除浮动 -->
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/#/index"></a> 
            </div>
            <div class="title">
                <h2>{{title}}<slot name="tip"></slot></h2>
            </div>
            <div class="username">
                <a href="javascript:;">{{this.$store.state.username}}</a>
            </div>
        </div> 
    </div>
</template>



<script>
    export default{
        name:'order-header',
        props:{
            title:String
        }
    }

</script>
<style lang='scss'>
    .order-header{
        padding:30px 0;
        border-bottom: 2px solid #FF6600;
        .header-logo{
            float: left;
        }
        .title,.username{
            display: inline-block;
            height:55px;
            line-height: 55px;
        }
        .title{
            float:left;
            margin-left: 54px;
            h2{
                color: #333333;
                font-size: 28px;
            }
            span{
                font-size: 14px;
                margin-left: 17px;
                color: #999999;
                font-weight: 200;
            }
        }
        .username{
            float: right;
            // a链接标签优先级高 所以需要在a标签上修改username的字体颜色
            a{
                color: #666666;
                font-size: 16px;
            }
        }
    }
</style>