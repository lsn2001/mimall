<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class= "topbar-menu">
                    <a href="javascript:;">小米商城</a> <!-- 设置javascript:; 页面不会刷新 -->
                    <a href="#">MUI</a> 
                    <a href="#">云服务</a>
                    <a href="#">协议规则</a>
                </div>
                <div class="topbar-user">
                    <!-- 判断是否为用户名 是则显示用户名 否则显示登录 -->
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="goToLogin">登录</a>
                    <a href="javascript:;" @click="exit" v-if="username">退出</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" v-if="!username">注册</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
                </div>
            </div>            
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a> 
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <!-- 加入key属性 能够复用已有元素，加快Vue的渲染 -->
                                <li class="product" v-for="(item, index) in phoneList " :key="index">
                                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a> 
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item, index) in RedphoneList " :key="index">
                                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item, index) in TV " :key="index">
                                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.mainImage" alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="pro-price">{{item.price | currency}}</div>
                                    </a> 
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
    export default{
        name:'nav-header',
        // 为什么data一定是函数 定义局部data 只服务于当前vue组件 防止数据串用
        data(){
            return {
                
                phoneList:[],
                RedphoneList:[],
                TV:[]
            }
        },
        // 解决延迟问题 避免先读数据然后才拿到接口的数据 导致数据没有获取到
        computed:{
            username(){
                return this.$store.state.username;
            },
            cartCount(){
                return this.$store.state.cartCount;
            }
        },
        // 过滤器 一般用在金额格式化 日期格式化
        filters:{
            currency(val){
                if(!val) return '0.00'
                return '￥' + val.toFixed(2) + '元'
            }
        },
        mounted(){
            this.getProductList();
        },
        methods:{
            login(){
                this.$router.push('/login')
            },
            getProductList(){
                this.axios.get('./products',{
                    // get需要加params进行传参 post不用
                    params:{
                        categoryId:'100012',
                          pageSize:20 
                    }
                }).then((res)=>{
                     if(res.list.length>=6){
                        this.phoneList = res.list.slice(0,6); // 只取六条数据
                        this.RedphoneList = res.list.slice(7,13);
                        this.TV = res.list.slice(13,20);

                    } 
                    
                })
            },
            goToCart(){
                // 跳转路由
                this.$router.push('/cart');
            },
            goToLogin(){
                this.$router.push('./login')
            },
            exit(){
                this.$store.state.username ='';
                this.$router.push('/#/index');
            }
        }
    }

</script>
<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
 .header{
     .nav-topbar{
         height:39px;
         line-height: 39px;
         background-color: #333333;
         color:#B0B0B0;
         
     
     .container{
     @include flex();
     }
     a{
         display: inline-block;
         color:#B0B0B0;
         margin-right: 17px;
     }
     .my-cart{
         width:110px;
         background-color: #FF6600;
         text-align: center;
         color: #ffffff;
         margin-right:0;
         .icon-cart{
             @include bgImg(16px,16px,'D:/study/前端/mimall/public/imgs/icon-cart.png');
             margin-right: 4px;
             
         }

     }
     }
        .nav-header{
         .container{
             position: relative;
             height:112px;
             @include flex();
             .header-logo{
                 display: inline-block;
                 width: 55px;
                 height: 55px;
                 background-color: #FF6600;
                 a{
                     display: inline-block;
                     width:110px;
                     height: 55px;
                     /* 利用伪类设置两张图片 */
                     &:before{
                        //  占位
                         content:' ';
                         @include bgImg(55px,55px,'D:/study/前端/mimall/public/imgs/mi-logo.png',55px);
                         /* display: inline-block;
                         width: 55px;
                         height: 55px;
                         background: url('D:/study/前端/mimall/public/imgs/mi-logo.png') no-repeat center;
                         background-size: 55px; */
                         transition: margin .2s;
                         
                     }
                     &:after{
                         content:' ';
                         @include bgImg(55px,55px,'D:/study/前端/mimall/public/imgs/mi-home.png',55px);
                         /* display: inline-block;
                         width: 55px;
                         height: 55px;
                         background: url('D:/study/前端/mimall/public/imgs/mi-home.png') no-repeat center;
                         background-size: 55px; */
                         
                     }
                     &:hover::before{
                         margin-left:-55px;
                         /* 指定过渡元素 */
                         transition: margin .2s;
                    }
                }
            }
            .header-menu{
                display:inline-block;
                padding-left: 209px;
                width: 643px;
                .item-menu{
                    display: inline-block;
                    color:#333333;
                    font-weight:bold; // 加粗字体
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;
                    span{
                        cursor:pointer; // 鼠标悬停能带小手的图标
                    }
                    //展示菜单
                    &:hover{
                        color: $colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children{
                        position: absolute;
                        top: 112px;
                        left:0;
                        width:1226px;
                        height: 0px;
                        // 透明度为0
                        opacity: 0;
                        border-top:1px solid #E5E5E5;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0 ,0,0.11);
                        text-align: center;
                        overflow: hidden;
                        transition: height .5s;
                        z-index: 10;
                        background-color: #ffffff;
                        .product{
                            position: relative;
                            float:left;
                            width:16.6%;
                            height: 220px;
                            font-size:12px;
                            line-height: 12px;
                            a{
                                display: inline-block;
                            }
                            img{
                                width: auto;
                                height:111px;
                                margin-top: 26px;
                            }
                            .pro-img{
                                height:137px;
                            }
                            .pro-name{
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pro-price{
                                color:$colorA;

                            }
                            &:before{
                            content:' ';
                            position:absolute;
                            top:28px;
                            right: 0;
                            border-left:1px solid $colorF;
                            height: 100px;
                            width: 1px;
                        }
                        // 取消伪类最后一个元素
                        &:last-child:before{
                            display:none;
                        }
                        }
                    }
                    
                }
            

            }
            .header-search{
                width:319px;
                .wrapper{
                    height: 50px;
                    border:1px solid #E0E0E0;
                    display: flex;
                    align-items: center;
                    input{
                        // border:none;
                        box-sizing: border-box; // 盒子模型 不会算上padding值
                        //border-right: 1px solid #E0E0E0;
                        width:264px;
                        height:50px;
                        padding-left: 14px;
                    }
                    a{
                        @include bgImg(18px,18px,'D:/study/前端/mimall/public/imgs/icon-search.png');
                        /* display: inline-block;
                        width: 18px;
                        height: 18px;
                        background: url('D:/study/前端/mimall/public/imgs/icon-search.png') no-repeat center;
                        background-size:contain; */
                        margin-left: 17px;

                    }
                }
            }
        }
        }

 }
</style>