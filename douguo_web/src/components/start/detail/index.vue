<template>
  <div class="d">
    <div class="Sdetail">
        <div class="detailCont">
            <div :class="{ hid : item.Shoppingkey != imgid }" class="img fl"  :key="index+1"  v-for=" (item,index) in drink.list" >
                <img v-if="item.Shoppingkey === imgid " :src="'http://topyun.qicp.vip/' +item.imgurl" alt="">
            </div>
            <div class="fl text">
                <p style="color: #C2A661;font-size:14px; margin-bottom:10px;">{{drink.title}}</p>
                <span :class="{ hid : item.Shoppingkey != imgid }"  :key="index+3"  v-for=" (item,index) in drink.list">
                 <h3 v-if="item.Shoppingkey === imgid " style="font-size:26px; margin-bottom:10px;">{{item.name}}</h3>
                </span>
                <span :class="{ hid : item.Shoppingkey != imgid }"  :key="index+2"  v-for=" (item,index) in drink.list">
                  <p v-if="item.Shoppingkey === imgid " style="font-size:16px">{{item.preset}}</p>
                </span>
            </div>
        </div>
        <div class="guess" >
            <h2>猜你喜欢</h2>
            <span @click="bannerbtn(0)" class=" swiper-left"><i class="el-icon-arrow-left"></i></span>
            <div ref="container" style="overflow: hidden; width: 925px;">
                <ul class="guessList" :style="{width:slidewidth,transform:'translateX('+translate+'px)',transition: 'transform 303ms ease 0s'}">
                  <li :key="index+4" v-for="(item,index) in list">
                      <a :style= "{background:'url('+item.url+') center/contain no-repeat' }"></a>
                      <p>{{item.title}}</p>
                  </li>
                </ul>
              </div>
            <span @click="bannerbtn(1)" class=" swiper-right"><i class="el-icon-arrow-right"></i></span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drink: '',
      imgid: 1,
      index: 1,
      slidewidth: 0,
      translate: 0,
      list: [
        { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/cold-brew-lemon-sour.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/peach-shrub-fizz.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/peach-shrub-fizz.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/peach-shrub-fizz.jpg', title: '美式咖啡' }
      ]
    }
  },
  methods: {
    // 轮播
    bannerbtn (p) {
      if (p === 0) {
        if (this.index > 1) {
          this.index--
        }
         console.log(this.index)
      } else {
        if(this.index < this.swiper) {
          this.index++
        }
        console.log(this.index)
      }
      this.countbanner()
    },
    countbanner () {
      var width = this.$refs.container.offsetWidth
      console.log(width)
      this.translate = -width * (this.index - 1)
    }
  },
  computed: {
    // 监听vuex中的数据是否发生了变化
    dd () {
      return this.$store.state.data
    },
    swiper () {
      return Math.ceil(this.list.length) / 5
    }
  },
  mounted () {
    this.drink = this.$store.state.data
    this.imgid = this.$route.query.id
    // 计算swiper中li（即图片内容）的宽度
    this.slidewidth = this.list.length * 232 + 'px'
    console.log(this.slidewidth)
  },
  watch: {
    dd(val){
         this.drink = val
    }
  }
}
</script>

<style lang="less" scoped>
@import '~css/public.less';
.hid{
  display: none;
}
.d{
  background: #f7f7f7;
}
.Sdetail{
    .size(1000px,100%);
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
            width: 38%;
        }
    }
    .guess{
        height: 315px;
        position: relative;
        margin-left: 75px;
        h2{
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        span{
          position: absolute;
          font-size: 35px;
          font-weight: bold;
          &.swiper-left{
            left: -27px;
            top: 43%;
             &:hover{
                font-size: 45px;
                top: 43%;
                transition: .5s;
              }
          }
           &.swiper-right{
            right: -27px;
            top: 43%;
             &:hover{
                font-size: 45px;
                top: 43%;
                transition: .5s;
              }
          }
        }
        ul{
            display: flex;
            width: 100%;
            overflow: hidden;
           li{
            width: 182px;
            height: 221px;
            padding: 16px;
            text-align: center;
            float: left;
             &:hover{
                color: inherit;
                transform: translate3d(0, -8px, 0);
                transition: .6s;
            }
            &:hover a{
                box-shadow: 0 1px 3px 2px rgba(0, 0, 0,0.23);
            }
             a{
                 width: 145px;
                height: 145px;
                border-radius: 100%;
                margin: 0 auto;
                box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                display: inline-block;
             }
             p{
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
