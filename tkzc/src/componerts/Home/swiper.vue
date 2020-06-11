<template>
    <div>
        <div class="swiper-title">
            <span>{{hometype.title}}</span>
            <div class="fr">
                <ul class="inline-block">
                    <li @click="chamgeIndex(item)" :class="{current: index == (item)}" :key="key" v-for="(item, key) in slideNum" class="swiper-dot"></li>
                    <!-- <li class="swiper-dot current"></li>
                    <li class="swiper-dot"></li> -->
                </ul>
                <a class="text-main texe-underlin">更多></a>
            </div>
        </div>
        <div :style="{height: (hometype.title == '热门标签'? 171 : 320) + 'px'}" class="swiper-content">
            <a @click="swiperBtn(0)" class="swiper-btn left "><i class=" el-icon-arrow-left"></i></a>
            <a @click="swiperBtn(1)" class="swiper-btn right "><i class="el-icon-arrow-right"></i></a>
            <div ref="container" class="swiper-container">
                <ul :class="{small: hometype.title == '热门标签'}" :style="{width: slideWidth, transform: 'translateX('+translate+'px)'}" class="swiper-slide" >
                    <li   :key="key" v-for="(item, key) in list" class="swiper-list">
                        <div :style="{background:'url('+item.image.small+') center'}" class="swiper-img"></div>
                        <div v-if="hometype.title != '热门标签'">
                          <p>'Argels'</p>
                          <p>设备：<em class="text-main">Mavic 2 Pro</em></p>
                          <p><a class="el-icon-view"></a>55 <a class="el-icon-thumb"></a>10</p>
                        </div>
                        <div v-else class="text-canter">
                          Mavic Air
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { axiosRequest } from 'public/axios'
export default {
  props: {
    hometype: Object
  },
  created () {
    axiosRequest({
      url: this.hometype.api,
      data: this.hometype.params
    }).then((res) => {
      this.list = res.data.items
      console.log(this.list)
      this.slideWidth = this.list.length * 285 + (this.list.length) * 20 + 'px'
    })
  },
  data () {
    return {
      slideWidth: '100%',
      index: 1,
      translate: 0,
      list: [{
        img: 'http://img5.imgtn.bdimg.com/it/u=3238317745,514710292&fm=26&gp=0.jpg'
      }, {
        img: 'http://img5.imgtn.bdimg.com/it/u=3238317745,514710292&fm=26&gp=0.jpg'
      }, {
        img: 'http://img5.imgtn.bdimg.com/it/u=3238317745,514710292&fm=26&gp=0.jpg'
      }, {
        img: 'http://img5.imgtn.bdimg.com/it/u=3238317745,514710292&fm=26&gp=0.jpg'
      }, {
        img: 'http://img5.imgtn.bdimg.com/it/u=3238317745,514710292&fm=26&gp=0.jpg'
      }, {
        img: 'http://img5.imgtn.bdimg.com/it/u=3238317745,514710292&fm=26&gp=0.jpg'
      }, {
        img: 'http://img5.imgtn.bdimg.com/it/u=3238317745,514710292&fm=26&gp=0.jpg'
      }]
    }
  },
  computed: {
    slideNum () {
      return Math.ceil(this.list.length / (this.hometype.title === '热门标签' ? 6 : 4))
    }
  },
  mounted () {

  },
  // created() {
  //   this.slideWidth = this.list.length * 285 + (this.list.length) * 20 + 'px'
  // },
  methods: {
    chamgeIndex (index) {
      this.index = index
      this.cacultateWidth()
      // this.translate = this.translate - width
      // 简写方法如下
      // this.translate -= width
      // console.log(this.translate)
    },
    swiperBtn (position) {
      if (position === 0) {
        if (this.index > 1) {
          this.index--
          this.cacultateWidth()
        }
      } else {
        if (this.index < this.slideNum) {
          this.index++
          this.cacultateWidth()
        }
      }
    },
    cacultateWidth () {
      var width = this.$refs.container.offsetWidth
      this.translate = -width * (this.index - 1)
    }
  }
}

</script>

<style scoped lang="less">
@import '~@/assets/css/varbile.less';
.swiper-dot {
    display: inline-block;
    .size(12px, 12px);
    background: @borderGray;
    border-radius: 2px;
    margin: 0 5px;
    &.current {
        background: @main;
    }
}
.swiper-btn {
    .inline-block;
    .size(48px, 48px);
    .text-align();
    .line-height(48px);
    font-size: 30px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    margin-top: -24px;
    &:hover {
        .el-hover(#222, #fff, 0.4)
    }
    &.left {
        left: 20px;
        // left: 75px;
    }
    &.right {
        right: 20px;
        // right: 75px;
    }
}

.swiper-content {
    position: relative;
    height: 320px;
}
.swiper-container {
    position: relative;
    margin: 0 70px;
    height: 320px;
    // background: red;
    overflow: hidden;
    .swiper-slide {
        // position: absolute;
        left: 0;
        top: 0;
        transition: transform 300ms;
    .swiper-list {
        width: 285px;
         margin-right: 20px;
        // margin-right: 65px;
        float: left;
        .swiper-img {
            .size(100%, 190px);
            // background: url(https://cdn-usa.skypixel.com/uploads/usa_files/photo/image/4ea2a0f5-3b03-44ed-91b2-18f3148694d6.jpg@!1920) center;
            // img {
            //     max-width: 100%;
            //     max-height: 100%;
            // }
        }
    }
    &.small {
            .swiper-list {
                width: 183px;
                .swiper-img {
                    .size(100%, 122px)
                }
            }
        }
    }
}
.el-icon-view {
  font-size: 20px;
  margin-right: 10px;
}
.el-icon-thumb {
  font-size: 20px;
  margin-left: 20px;
  margin-right: 10px;
}
</style>
