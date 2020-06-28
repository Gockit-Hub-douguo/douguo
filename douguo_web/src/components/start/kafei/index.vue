<template>
  <div class="d">
    <div class="Sdetail">
        <div class="detailCont">
            <div :class="{ hid : item.Shoppingkey != imgid }" class="img fl"  :key="index+new Date().getTime()"  v-for=" (item,index) in drink.list" >
                <img v-if="item.Shoppingkey === imgid " :src="'http://topyun.qicp.vip/' +item.imgurl" alt="">
            </div>
            <div class="fl text">
                <p style="color: #C2A661;font-size:14px; margin-bottom:10px;">{{drink.title}}</p>
                <span :class="{ hid : item.Shoppingkey != imgid }"  :key="index+'#'"  v-for=" (item,index) in drink.list">
                    <h3 v-if="item.Shoppingkey === imgid " style="font-size:26px; margin-bottom:10px;">{{item.name}}</h3>
                </span>
                <span :class="{ hid : item.Shoppingkey != imgid }"  :key="index+''"  v-for=" (item,index) in drink.list">
                  <p v-if="item.Shoppingkey === imgid " style="font-size:16px">{{item.preset}}</p>
                </span>
                <div class="grades"  :class="{ hid : item.Shoppingkey != imgid }"  :key="index+'1'"  v-for=" (item,index) in drink.list">
                    <ul class="gradesList" v-if="item.Shoppingkey === imgid ">
                        <li>
                            <p>烘焙程度：{{item.num}}</p>
                            <div class="jindu">
                                <div class="jindugbc" :class="item.num === '中度烘焙' ? 'jin1':'jin2' " ></div>
                            </div>
                        </li>
                        <li>
                            <p>酸度：{{item.acid}}</p>
                            <div class="jindu">
                                <div class="jindugbc" :class ="item.acid === '低' ? 'jin3':item.acid === '中' ? 'jin2' : 'jin1'"></div>
                            </div>
                        </li>
                        <li>
                            <p>醇度：{{item.alcohol}}</p>
                            <div class="jindu">
                                <div class="jindugbc " :class="item.alcohol === '厚重' ? 'jin1':'jin2' "></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <table style="width:100%;" :class="{ hid : item.Shoppingkey != imgid }"  :key="index+'d'"  v-for=" (item,index) in drink.list">
                    <tbody v-if="item.Shoppingkey === imgid ">
                        <tr class="cd">
                            <td class="bold">产地</td>
                            <td>{{item.cd}}</td>
                        </tr>
                        <tr class="cd">
                            <td class="bold">加工方法</td>
                            <td>{{item.function}}</td>
                        </tr>
                        <tr class="cd">
                            <td class="bold">风味</td>
                            <td>{{item.fwei}}</td>
                        </tr>
                        <tr class="cd">
                            <td class="bold">食品搭配建议</td>
                            <td>{{item.spjy}}</td>
                        </tr>
                        <tr class="cd">
                            <td class="bold">类似咖啡</td>
                            <td>{{item.class}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="guess" >
            <h2>猜你喜欢</h2>
            <span @click="bannerbtn(0)" class=" swiper-left"><i class="el-icon-arrow-left"></i></span>
            <div ref="container" style="overflow: hidden; width: 925px;">
                <ul class="guessList" :style="{width:slidewidth,transform:'translateX('+translate+'px)',transition: 'transform 303ms ease 0s'}">
                  <li :key="index" v-for="(item,index) in list">
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
    slidewidth: '',
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
  computed: {
      dd(){
          return this.$store.state.data
      },
     swiper () {
      return Math.ceil(this.list.length) / 5
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
      this.translate = -width * (this.index - 1)
    }
  },
  mounted () {
      this.drink = this.$store.state.data
      this.imgid = this.$route.query.id
      console.log(this.drink)
     // 计算swiper中li（即图片内容）的宽度
    this.slidewidth = this.list.length * 232 + 'px'
  },
  watch: {
      dd(val){
          this.drink = val
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
            margin-top: 220px;
            img{
                max-width: 100%;
                max-height: 100%;
            }
        &.hid{
            display: none;
        }
        }
        .text{
            box-sizing: border-box;
            padding: 48px 0px 48px 33px;
            line-height: 28px;
            float: left;
            display: inline-block;
            width: 440px;
            .grades{
                margin-bottom: 24px;
                .gradesList{
                    width: 100%;
                    li{
                        margin: 0 0 24px;
                        p{
                            color: rgba(0, 0, 0, 0.56);
                            margin-bottom: 12px;
                            word-break: normal;
                            font-size: 16px;
                        }
                        .jindu{
                            margin-top: 6px;
                            background: rgba(0, 0, 0, 0.12);
                            border-radius: 24px;
                            width: 100%;
                            .jindugbc{
                                background: #00A862;
                                border-radius: 24px;
                                box-sizing: border-box;
                                color: #FFF;
                                min-height: 6px;
                                font-size: 12px;
                                font-size: 1.2rem;
                                line-height: 1;
                                padding: 4px 0;
                                overflow: hidden;
                                &.jin1{
                                    width: 58%;
                                }
                                &.jin2{
                                    width:96%;
                                }
                                &.jin3{
                                    width: 30%;
                                }
                            }
                        }
                    }
                }
            }
            tbody{
                display: table-row-group;
                vertical-align: middle;
                border-color: inherit;
                font-size: 16px;
                .cd{
                    border-top: none;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    td{
                        padding: 12px 0 12px 12px;
                        font-size: 16px;
                        line-height: 25px;
                       &.bold{
                        font-weight: bold;
                       }
                    }
                }
            }
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
