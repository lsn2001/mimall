<template>
    <!-- 设置is_fixed样式 如果isFixed值为true 则需要固定 反之则不需要 -->
    <div class="nav-bar" :class="{'is_fixed':isFixed}">
        <div class="container">
            <div class="pro-title">
                小米8
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'nav-bar',
    data(){
        return{
            isFixed:false
        }
    },
    mounted(){
        // 监听滚动事件 事件名为initHeight
        window.addEventListener('scroll',this.initHeight);
    },
    methods:{
        initHeight(){
            // 考虑浏览器兼容性问题 所以使用三种方法获取 为true的话就选那一项
            let scrollTop = window.pageYoffset || document.documentElement.scrollTop || document.body.scrollTop;
            this.isFixed = scrollTop > 152?true:false;
        },
        destroyed(){
            // 其它页面也会加载事件 所以需要vue生命周期销毁事件 第三个参数为处理方式 捕获还是冒泡 默认为捕获true false为冒泡 冒泡销毁全部事件 
            window.removeEventListener('scroll',this.initHeight,false);
        }
    }
} 
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .nav-bar{
        height: 70px;
        line-height: 70px;
        border: 1px solid $colorH;
        background-color: #FFFFFF;
        &.is_fixed{
            // 固定定位 吸顶
            position: fixed;
            top:0;
            width:100%; 
            box-shadow: 0 5px 5px #cccccc;
        }
        .container{
            @include flex();
            .pro-title{
                font-size: $fontH;
                color:$colorB;
                font-weight: bold;
            }
            .pro-param{
                font-size: $fontJ;
                span{
                    margin: 0 10px;
                }
                a{
                  color:$colorC;
                }
                
            }
        }
    }
</style>