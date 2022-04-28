<template>
    <div class="product">
        <product-param v-bind:title="product.name">
            <template v-slot:buy>
                <button class="btn" @click="buy">立即购买</button>
            </template>
        </product-param>
        <div class="content">
            <div class="item-bg">
                <h2>{{product.name}}</h2>
                <h3>{{product.subtitle}}</h3>
                <p>
                <a href="" id="">全球首款双频 GP</a>
                <span>|</span>
                <a href="" id="">骁龙845</a>
                <span>|</span>
                <a href="" id="">AI 变焦双摄</a>
                <span>|</span>
                <a href="" id="">红外人脸识别</a>
                </p>
                <div class="price">
                <span>￥<em>{{product.price}}</em></span>
                </div>
            </div>
            <div class="item-bg-2"></div>
            <div class="item-bg-3"></div>
            <div class="item-swiper">
                <!-- 轮播图 -->
                <swiper :options="swiperOption">
                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
                <p class="desc">小米8 AI变焦双摄拍摄</p>
            </div>
            <div class="item-video">
                <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
                <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
                <!-- 这里的注释都是animation实现动画 -->
                <div class="video-bg" @click="showSlide='slideDown'"></div>
                <div class="video-box" v-show="showSlide">
                <!-- 定义遮罩 -->
                <div class="overlay" v-if="showSlide"></div>
                <!-- 绑定动态的类名 控制动画的播放动画和关闭动画 -->
                  <div class="video" v-bind:class="showSlide"> 
                    <span class="icon-close" @click="closeVideo"></span>
                    <!-- muted和autoplay要同时使用才能自动播放 controls是左下角播放视频的控件 控制视频暂停和播放 -->
                    <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
                </div>
                </div>
            </div>
            </div>
        </div>
</template>



<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import ProductParam from './../components/ProductParam'
  export default{
    name:'product',
    components:{
      Swiper,
      SwiperSlide,
      ProductParam
    },
    data(){
      return {
        showSlide:'',//控制动画效果（animation实现动画） 
        product:{},//商品信息
        swiperOption:{
          autoplay:true,
          slidesPerView:3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          }
        }
      }
    },
    mounted(){
      this.getProductInfo();
    },
    methods:{
      getProductInfo(){
        // 参数是route 路由跳转是router
        let id = this.$route.params.id;
        // 动态字符串模板``
        this.axios.get(`/products/${id}`).then((res)=>{
          this.product = res;
        })
      },
      buy(){
        let id = this.$route.params.id;
        this.$router.push(`/detail/${id}`);
      },
      closeVideo(){
        // 点击关闭图标 将通过showSlide变量绑定video的class值
        this.showSlide='slideUp';
        let vi = document.getElementsByTagName('video')[0]
        vi.pause();
        setTimeout(()=>{
          this.showSlide='';
        },600)
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/mixin.scss';
  .product{
    .content{
      .item-bg{
        background:url('D:/study/前端/mimall/public/imgs/product/product-bg-1.png') no-repeat center;
        height:718px;
        text-align:center;
        h2{
          font-size:80px;
          padding-top:55px;
        }
        h3{
          font-size:24px;
          letter-spacing: 10px;
        }
        p{
          margin-top:21px;
          margin-bottom:40px;
          a{
            font-size:16px;
            color:#333333;
          }
          span{
            margin:0 15px;
          }
        }
        .price{
          font-size:30px;
          color:#333333;
          em{
            font-style:normal;
            font-size:38px;
          }
        }
      }
      .item-bg-2{
        background:url(D:/study/前端/mimall/public/imgs/product/product-bg-2.png) no-repeat center;
        height:480px;
        background-size:1226px 397px;
      }
      .item-bg-3{
        background:url(D:/study/前端/mimall/public/imgs/product/product-bg-3.png) no-repeat center;
        height:638px;
        background-size:cover;
      }
      .item-swiper{
        margin:36px auto 52px;
        .desc{
          font-size:18px;
          color:#333333;
          text-align:center;
        }
        img{
          width:100%;
        }
      }
      .item-video{
        height:1044px;
        background-color:#070708;
        margin-bottom:76px;
        color:#FFFFFF;
        text-align:center;
        h2{
          font-size:60px;
          padding-top:82px;
          margin-bottom:47px;
        }
        p{
          font-size:24px;
          margin-bottom:58px;
        }
        .video-bg{
          background:url('D:/study/前端/mimall/public/imgs/product/gallery-1.png') no-repeat center;
          background-size:cover;
          width:1226px;
          height:540px;
          margin:0 auto 120px;
          cursor:pointer;
        }
        .video-box{
          .overlay{
            @include position(fixed);
            background-color:#333333;
            opacity:.4;
            z-index:10;
          }
          // 将div元素匀速向下运动（animation实现动画）
          @keyframes slideDown{
            from{
              top:-50%;
              opacity:0;
            }
            to{
              top:50%;
              opacity:1;
            }
          }
          @keyframes slideUp{
            from{
              top:50%;
              opacity:1;
            }
            to{
              top:-50%;
              opacity:0;
            }
          }
          .video{
            /* fixed相对于浏览器窗口进行定位，absolute相对于整个浏览器文档进行定位 */
            position:fixed;
            /* 垂直居中的其中一种方法 */ 
            top:-50%;
            left:50%;
            transform:translate(-50%,-50%);

            z-index:10;
            width:1000px;
            height:536px;
            opacity:1;
            // animation适用于复杂的动画效果（animation实现动画）
            &.slideDown{
              animation:slideDown .6s linear;
              top:50%;
            }
            &.slideUp{
              animation:slideUp .6s linear;
            }
            .icon-close{
              position:absolute;
              top:20px;
              right:20px;
              @include bgImg(20px,20px,'D:/study/前端/mimall/public/imgs/icon-close.png');
              cursor:pointer;
              z-index:11;
            }
            video{
              width:100%;
              height:100%;
              // cover是把视频的内容覆盖窗口 contain是将视频的内容适配到整个窗口
              object-fit:cover;
              outline:none;
            }
          }
        }
      }
    }
    button{
      margin-left:10px;
    }
  }
</style>