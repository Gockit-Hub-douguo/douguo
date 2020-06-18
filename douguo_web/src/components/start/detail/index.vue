<template>
  <div class="d">
    <div class="Sdetail">
        <div class="detailCont">
            <div class="img">
                <img src="https://www.starbucks.com.cn/images/products/sparkling-espresso-tonic.jpg" alt="">
            </div>
            <div class="fl text">
                <p style="color: #C2A661;font-size:14px; margin-bottom:10px;">星巴克玩味冰调™</p>
                <h3 style="font-size:26px; margin-bottom:10px;">气炫冰山美式</h3>
                <p style="font-size:16px">
                    灵感源自金汤力<br>
                    沁爽柠香揉合意式浓缩<br>
                    低糖&低卡<br>
                    含少量酒精成分<br>
                    孕妇与儿童不建议饮用
                </p>
            </div>
        </div>
        <div class="guess">
            <h2>猜你喜欢</h2>
            <ul>
               <li :key="index" v-for="(item,index) in list">
                   <a :style= "{background:'url('+item.url+') center/contain no-repeat' }"></a>
                   <span>{{item.title}}</span>
               </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/cold-brew-lemon-sour.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/peach-shrub-fizz.jpg', title: '美式咖啡' }
      ]
    }
  }
}
</script>>

<style lang="less" scoped>
@import '~css/public.less';
.d{
  background: #f7f7f7;
}
.Sdetail{
    .size(1000px,100%);
    overflow: hidden;
    margin: 0 auto;
    .detailCont{
        .size(100%,auto);
        padding: 80px;
        overflow: hidden;
        .img{
            float: left;
            .size(400px,355px);
            img{
                max-width: 100%;
                max-height: 100%;
            }
        }
        .text{
            box-sizing: border-box;
            padding: 48px 48px 48px 24px;
            line-height: 28px;
        }
    }
    .guess{
        padding-bottom: 72px;
        overflow: hidden;
        padding-left: 75px;
        h2{
            font-size: 20px;
            font-weight: bold;
        }
        ul{
            margin-left: -24px;
            margin-right: -24px;
           li{
            width: 232px;
            height: 221px;
            padding: 16px;
            text-align: center;
            float: left;
            margin-right: 10px;
             &:hover{
                color: inherit;
                transform: translate3d(0, -8px, 0);
                transition: .6s;
            }
            &:hover a{
                box-shadow: 0 1px 3px 2px rgba(0, 0, 0,0.23);
            }
             a{
                 width: 150px;
                height: 150px;
                border-radius: 100%;
                margin: 0 auto;
                box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                display: inline-block;
             }
             span{
                 display: block;
                    font-size: 16px;
                    font-weight: bold;
                    margin-top: 14px;
             }
           }
        }
    }
}
</style>
