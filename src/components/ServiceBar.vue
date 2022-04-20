<template>
    <div class="service">
        <div class="container"></div>
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7天无理由退货</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li><span class="icon-post"></span>满150包邮</li>
            </ul>
    </div>
</template>



<script>

    export default{
        name:'service-bar',
        
    }

</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
    .service{
        font-size: 16px;
        padding:33px 0px;
        color: #666666;
        text-align: center;
        li{
            display: inline-block;
            width: 24.8%;
            border-right: 1px solid #e5e5e5;
            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                /* 图片和文字居中 */
                vertical-align: middle;
                margin-right:8px;
            }
            .icon-setting{
                @include bgImg(20px,20px,'D:/study/前端/mimall/public/imgs/icon-setting.png')
            }
            .icon-7day{
                @include bgImg(20px,20px,'D:/study/前端/mimall/public/imgs/icon-7day.png')
            }
            .icon-15day{
                @include bgImg(20px,20px,'D:/study/前端/mimall/public/imgs/icon-15day.png')
            }
            .icon-post{
                @include bgImg(20px,20px,'D:/study/前端/mimall/public/imgs/icon-post.png')
            }
        }
    }
</style>