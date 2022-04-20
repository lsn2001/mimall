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
                                                <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
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
                                                <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
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
                                                <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
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
                                                <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
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
                                                <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
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
                                                <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
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
                                                <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
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
                                                <img v-bind:src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
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
                            <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
                        </swiper-slide>
                        <!-- 如果需要分页器 -->
                            <div class="swiper-pagination" slot="pagination"></div>
                            
                            <!-- 如果需要导航按钮 -->
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-prev"></div>
    
    
                        </swiper>
                </div>
                <!-- 广告位 -->
                <div class="ads-box"></div>
                <!-- 导航 -->
                <div class="banner"></div>
                <!-- 商品列表 -->
                <div class="product-box"></div>
            </div>
        </div>
        <service-bar></service-bar>
        
    </div>
</template>



<script>
import ServiceBar from './../components/ServiceBar'
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'

import 'D:/study/前端/mimall/node_modules/swiper/css/swiper.css'
 
    export default{
        name:'index',
        components:{
            Swiper,
            SwiperSlide,
            ServiceBar
        },
        data(){
        return{
            swiperOption:{
                autoplay:true, // 自动播放
                loop:true, // 循环播放
                effect:"cube", // 播放动画
                // cube参数
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
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
            ]

        }            
        
    }
}

</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
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
    }


</style>