<template>
    <div>
        <div class="index">
            <div class="container">
                <!-- 轮播 -->
                <div class="swiper-box">
                    <div class="nav-menu">
                        <ul class="menu-wrap">
                            <li class="menu-item">
                                <a href="javascript:;">手机 电话卡</a>
                                <div class="children">
                                    <ul v-for="(item,index) in menuList" v-bind:key="index">
                                        <li v-for="(sub,index) in item" v-bind:key="index">
                                            <a v-bind:href="sub?'/#/product/' + sub.id:''">
                                                <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                                {{sub?sub.name:'小米9'}}
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">电视盒子 电话卡</a>
                                <div class="children">
                                    <ul v-for="(item,index) in menuList" v-bind:key="index">
                                        <li v-for="(sub,index) in item" v-bind:key="index">
                                            <a v-bind:href="sub?'/#/product/' + sub.id:''">
                                                <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                                {{sub?sub.name:'小米9'}}
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">笔记本 平板</a>
                                <div class="children">
                                    <ul v-for="(item,index) in menuList" v-bind:key="index">
                                        <li v-for="(sub,index) in item" v-bind:key="index">
                                            <a v-bind:href="sub?'/#/product/' + sub.id:''">
                                                <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                                {{sub?sub.name:'小米9'}}
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">家电 插线板</a>
                                <div class="children">
                                    <ul v-for="(item,index) in menuList" v-bind:key="index">
                                        <li v-for="(sub,index) in item" v-bind:key="index">
                                            <a v-bind:href="sub?'/#/product/' + sub.id:''">
                                                <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                                {{sub?sub.name:'小米9'}}
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">出行 穿戴</a>
                                <div class="children">
                                    <ul v-for="(item,index) in menuList" v-bind:key="index">
                                        <li v-for="(sub,index) in item" v-bind:key="index">
                                            <a v-bind:href="sub?'/#/product/' + sub.id:''">
                                                <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                                {{sub?sub.name:'小米9'}}
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">智能 路由器</a>
                                <div class="children">
                                    <ul v-for="(item,index) in menuList" v-bind:key="index">
                                        <li v-for="(sub,index) in item" v-bind:key="index">
                                            <a v-bind:href="sub?'/#/product/' + sub.id:''">
                                                <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                                {{sub?sub.name:'小米9'}}
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">电源 配件</a>
                                <div class="children">
                                    <ul v-for="(item,index) in menuList" v-bind:key="index">
                                        <li v-for="(sub,index) in item" v-bind:key="index">
                                            <a v-bind:href="sub?'/#/product/' + sub.id:''">
                                                <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                                {{sub?sub.name:'小米9'}}
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>
                            <li class="menu-item">
                                <a href="javascript:;">生活 箱包</a>
                                <div class="children">
                                    <ul v-for="(item,index) in menuList" v-bind:key="index">
                                        <li v-for="(sub,index) in item" v-bind:key="index">
                                            <a v-bind:href="sub?'/#/product/' + sub.id:''">
                                                <img v-lazy="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                                {{sub?sub.name:'小米9'}}
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <swiper v-bind:options="swiperOption">
                        <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
                            <!-- 利用指令之后 后面的都是变量 如果需要用字符串 需要在""里面加上单引号'' -->
                            <a v-bind:href="'/#/product/'+item.id"><img v-lazy="item.img"></a>
                        </swiper-slide>
                        <!-- 如果需要分页器 -->
                            <div class="swiper-pagination" slot="pagination"></div>
                            
                            <!-- 如果需要导航按钮 -->
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-prev"></div>
    
    
                        </swiper>
                </div>
                <!-- 广告位 -->
                <div class="ads-box">
                    <a v-bind:href="'/#/product/'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
                        <!-- 图片懒加载 -->
                        <img v-lazy="item.img" alt="">
                    </a>
                </div>
                <!-- 导航 -->
                <div class="banner">
                    <a href="/#/product/30">
                        <img v-lazy="'/imgs/banner-1.png'" alt="">
                    </a>
                </div>
                <!-- 商品列表 -->
                
            </div>
            <div class="product-box">
                <div class="container">
                    <h2>手机</h2>
                    <div class="wrapper">
                        <div class="banner-left">
                            <a href="/#/product/35">
                                <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
                            </a>
                        </div>
                        <div class="list-box">
                            <div class="list" v-for="(arr,i) in phoneList" v-bind:key="i">
                                <div class="item" v-for="(item,j) in arr"  v-bind:key="j">
                                    <span  v-bind:class="[j%2==0?'new-pro':'kill-pro']" v-if="j%2==0" >新品</span>
                                    <span  v-bind:class="[j%2==0?'new-pro':'kill-pro']" v-if="j%2!=0" >秒杀</span>
                                    <div class="item-img">
                                        <img v-bind:src="item.mainImage" alt="">
                                    </div>
                                    <div class="item-info">
                                        <h3>{{item.name}}</h3>
                                        <p>{{item.subtitle}}</p>
                                        <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div>
        </div>
        <service-bar></service-bar>
        <modal 
        title="提示" 
        sureText="查看购物车" 
        btnType="1" 
        modalType="middle" 
        v-bind:showModal="showModal"
        v-on:submit="goToCart"
        v-on:cancel="showModal=false"
        >
        
        <!-- 需要嵌套一个template模板 利用v-slot:插槽名 -->
        <template v-slot:body>
            <p>商品添加成功！</p>
        </template>
        </modal>
    </div>
</template>



<script>
import ServiceBar from './../components/ServiceBar'
import Modal from './../components/Modal'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'

import 'D:/study/前端/mimall/node_modules/swiper/css/swiper.css'
 
    export default{
        name:'index',
        components:{
            Swiper,
            SwiperSlide,
            ServiceBar,
            Modal
        },
        data(){
        return{
            swiperOption:{
                autoplay:true, // 自动播放
                loop:true, // 循环播放
                effect:"cube", // 播放动画
                // cube参数
               
                // 分页
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                // 导航
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'43',
                    img:'/imgs/slider/slide-4.jpg'
                },

            ],
            menuList:[
                [
                    {
                        id:30,
                        img:'/imgs/item-box-1.png',
                        name:'小米CC9',
                        
                    },
                    {
                        id:31,
                        img:'imgs/item-box-2.png',
                        name:'小米8青春版'
                    },
                    {
                        id:32,
                        img:'imgs/item-box-3.jpg',
                        name:'Redmi K20 Pro'
                    },
                    {
                        id:33,
                        img:'imgs/item-box-4.jpg',
                        name:'移动4G专区'
                    }
                ],
                [
                    0,0,0,0
                ],
                [
                     0,0,0,0
                ],
                [
                     0,0,0,0
                ],
                [
                     0,0,0,0
                ],
                [
                     0,0,0,0
                ]
            ],
            adsList:[
                {
                    id:33,
                    img:'imgs/ads/ads-1.png'
                },
                {
                    id:48,
                    img:'imgs/ads/ads-2.jpg'
                },
                {
                    id:45,
                    img:'imgs/ads/ads-3.png'
                },
                {
                    id:47,
                    img:'imgs/ads/ads-4.jpg'
                },
            ],
            phoneList:[
                
            ],
            showModal:false,
            

        }
        

        
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            this.axios.get('./products',{
                params:{
                    categoryId:100012,
                    pageSize:14
                }
            }).then((res)=>{
                res.list = res.list.slice(6,14);
                // 使用一个数组定义返回一个二维数组 slice分割数组 不会改变原数组 
                this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];
                
            })
        },
        
        //  添加购物车功能
            addCart(id){
            this.axios.post('./carts',{
                productId:id,
                selected:true
            }).then((res)=>{
                if(this.$store.state.username=='')
                {
                    this.$store.state.cartCount = 0;
                    alert('请登录后再进行操作');
                    this.$router.push('/login');
                }
                else{
                    this.showModal=true;
                    this.$store.dispatch('saveCartCount',res.cartTotalQuantity); 
                }
                
            }).catch(()=>{
                this.showModal=true;
            })
        },
         /*    addCart(id){
                this.showModal = true;
                
            }, */
            goToCart(){
                // 路由跳转页面
                this.$router.push('./cart');
            }
    }
}

</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';
    .index{
        .swiper-box{
            .nav-menu{
                position:absolute;
                width:264px;
                // 不算padding值的盒子模型
                box-sizing: border-box;
                background-color: #55585A7a;
                height:451px;
                z-index:9;
                padding:26px 0;
                .menu-wrap{
                    .menu-item{
                        height:50px;
                        line-height:50px;
                        a{
                            display: block;
                            position: relative;
                            font-size: 16px;
                            color:#ffffff;
                            padding-left:30px;
                            &:after{
                                position:absolute;
                                right:30px;
                                top:17.5px;
                                content:' ';
                                @include bgImg(10px,15px,'D:/study/前端/mimall/public/imgs/icon-arrow.png');
                            }
                            
                        }
                        &:hover{
                                background-color: #FF6600;
                                .children{
                                    display: block;
                                }
                                
                        }
                        .children{
                            display: none;
                            width:962px;
                            height:451px;
                            background-color: #ffffff;
                            position:absolute;
                            top:0;
                            left: 264px;
                            border: 1px solid #e5e5e5;
                            ul{
                                display: flex;
                                // 两边对齐
                                justify-content: space-between;
                                height: 75px;
                                li{
                                    height:75px;
                                    // 行高
                                    line-height: 75px;
                                    // 均分宽度
                                    flex:1;
                                    padding-left: 23px;
                                }
                                a{
                                    color:#333333;
                                    font-size: 14px;
                                    &:hover{
                                        color:#FF6600;
                                    }
                                }
                                img{
                                    width:42px;
                                    height: 35px;
                                    // 设置图片和文字居中
                                    vertical-align: middle;
                                    margin-right: 15px;
                                }
                            }
                            
                        }
                    }
                }
            }
            .swiper-container{
                height:451px;
                .swiper-button-prev{
                    left:274px;
                }
                img{
                width:100%;
                height:100%;
            }
            }
        
        }
        .ads-box{
            @include flex();
            margin-top:14px;
            margin-bottom: 31px;
            a{
                 width: 296px;
                height: 167px;
            }
            display:flex;
            justify-content: space-between;
           
        }
        .banner{
            margin-bottom:50px;
        }
        .product-box{
            background-color: #F5F5F5;
            padding:30px 0px 50px;
            h2{
                font-size: $fontF;
                height:21px;
                line-height: 21px;
                padding-bottom: 25px;
                color: $colorB;
            }
            .wrapper{
                display: flex;
                .banner-left{
                    margin-right: 16px;
                    img{
                        width:224px;
                        height:619px;
                    }
                }
                .list-box{
                    .list{
                        @include flex();
                        width: 986px;
                        margin-bottom: 14px;
                        // 最后一个子元素的样式设置
                        &:last-child{
                            margin-bottom: 0;
                        }
                        .item{
                            width:236px;
                            height:302px;
                            background-color: $colorG;
                            text-align: center;
                            span{
                                display: inline-block;
                                width: 67px;
                                height: 24px;
                                font-size: 14px;
                                // 通过设置行高与高度相等 设置字体垂直居中
                                line-height: 24px;
                                color: $colorG;
                                &.new-pro{
                                    background-color: #7ECF68;
                                }
                                &.kill-pro{
                                    background-color: #E82626;
                                }
                            }
                            .item-img{
                                img{
                                    height:195px;
                                    width: 100%;
                                }
                            }
                            .item-info{
                                h3{
                                    font-size:$fontJ;
                                    color:$colorB;
                                    line-height: $fontJ;
                                    font-weight:bold;
                                }
                                p{
                                    color:$colorD;
                                    line-height:13px;
                                    // 上 左右 下
                                    margin:6px auto 13px;
                                }
                                .price{
                                    color:#F20A0A;
                                    font-size: $fontJ;
                                    font-weight:bold;
                                    cursor:pointer;
                                    &:after{
                                        @include bgImg(22px,22px,'D:/study/前端/mimall/public/imgs/icon-cart-hover.png');
                                        content: ' ';
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }


</style>