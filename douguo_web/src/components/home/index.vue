<template>
  <div class="indexbox">
    <!-- 顶部轮播 -->
    <div class="slider_box">
      <el-carousel :interval="4000" type="card" height="300px">
        <el-carousel-item v-for="index in 4" :key="index">
          <!-- <h3 class="medium" :style="{background: 'url('+item.imgUrl+')',backgroundSize: '100% 100%'}"></h3> -->
          <h3 class="medium" :style="{background: 'url(https://i3.meishichina.com/attachment/magic/2020/05/15/2020051515895360932208197577.jpg)',backgroundSize: '100% 100%'}"></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="BayBox">
      <!-- 每日精选菜谱 -->
      <menuRendering :datalists='imgMenu'></menuRendering>
      <!-- 笔记标题 -->
      <div class="btitle">
        <!-- 笔记标题 -->
        <div class="menuTitle">
          <h3 class="fl">笔记</h3> <el-link type='primary'  :underline="false" class="fr">更多 ></el-link>
        </div>
        <!-- 内容层 -->
        <ul class="menuList muil">
          <li v-for="(item, index) in indexwoks" :key="index" :class="{clearMR: index == 3}">
            <div class="menuOne">
              <a><img :src="item.wimgUrl" alt=""></a>
              <p class="Mtitle"><a>{{item.works_title}}</a></p>
              <p class="Mauthor">by <a>{{item.username}}</a></p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 大家都在搜 -->
      <div class="searchMax">
        <div class="searchinfo">
          <!-- 标题 -->
          <div class="menuTitle">
            <h3 class="fl">大家都在搜</h3>
          </div>          
          <!-- 标签层 -->
          <el-link :underline='false' v-for="(ite, index) in btnserch" :key="index">{{ite.lab}}</el-link>
        </div>
        <!-- 右则轮播 -->
        <div class="searchSlider fr">
          <el-carousel height="248px">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small" :style="{background:'url(https://cp1.douguo.com/upload/caiku/9/e/5/400x266_9eb264252b9222d322ad60b447825aa5.jpg)'}"></h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 热门食材 -->
      <div class="Ingredients">
        <div class="menuTitle">
          <h3 class="fl">热门食材</h3> <el-link type='primary'  :underline="false" class="fr">更多 ></el-link>
        </div>
        <ul class="IngredientsLists">
          <li v-for="it in 12" :key="it" :class="{clearmr: it == 6 || it == 12}">
            <el-link :underline="false" class="h-orange">
              <img src="https://cp1.douguo.com/upload/shicai/1446028243.jpg" alt="">
              <p>土豆</p>
            </el-link>
          </li>
        </ul>
      </div>
      <!-- 豆果达人 -->
      <div class="sage">
        <div class="menuTitle">
          <h3 class="fl">豆果达人</h3> <el-link type='primary'  :underline="false" class="fr">更多 ></el-link>
        </div>
        <ul>
          <Sage v-for="(item, index) in 4" :key="index"></Sage>
        </ul>
      </div>
      <!-- 精彩主题文章 -->
      <div class="article fl">
        <div class="menuTitle">
          <h3 class="fl">精彩主题文章</h3> <el-link type='primary'  :underline="false" class="fr">更多 ></el-link>
        </div>
        <div class="articleZ">
          <el-link :underline="false" class="fl"><img src="https://cp1.douguo.com/upload/post/1/6/9/16fd3c040f34c60d4f2f35a21bd73b89.jpg" alt=""></el-link>
          <h4><el-link :underline="false" class="h-orange">健康专家郑育龙教您如何用橄榄油吃出健康</el-link></h4>
          <p><span>来自：食界大咖秀</span><i>作者：<el-link :underline="false" class="h-orange">少油少盐</el-link></i></p>
        </div>
        <ul class="articleList">
          <li :class="{mlrt: it % 2 != 0}" class="fl" v-for="it in 6" :key="it">
            <span class="fl">·</span><el-link :underline="false" class="h-orange">"健康领鲜，臻享美好生活"松下风冷无霜三门冰箱阵容全新上市</el-link>
          </li>
        </ul>
      </div>
      <!-- 商城精选 -->
      <div class="shopping_cart fr">
        <div class="menuTitle">
          <h3 class="fl">商城精选</h3> <el-link type='primary'  :underline="false" class="fr">更多 ></el-link>
        </div>
        <ul>
          <router-link to="/goods">
            <li v-for="its in homegoods" :key="its">
              <el-link :underline="false"  class="fl"><img :src="its.fimgurl" alt=""></el-link>
              <h3><el-link :underline="false" class="h-orange">{{its.fname}}</el-link></h3>
              <p class="price">￥{{its.fnowprice}}</p>
              <p class="xssalesvolume">月售{{its.fsaleCount || 0}}</p>
            </li>
          </router-link>
        </ul>
      </div>
      <!-- 作品推荐 -->
      <div class="works fl">
        <div class="menuTitle">
          <h3>作品推荐</h3>
        </div>
        <ul>
          <li v-for="item in 4" :key="item">
            <el-link :underline="false" class="fl"><img src="https://cp1.douguo.com/upload/caiku/a/d/4/200_ad2c5b6adefb3663f3c347e609a6f7b4.jpg" alt=""></el-link>
            <div class="fl h-orange">
              <el-link :underline="false" class="athours h-orange">
                <p>涛涛妈咪的作品</p>
                <p>对照菜谱做出来的作品<em> 9764 </em>个</p>
              </el-link>
            </div>
            <div class="fr">
              <el-link :underline="false" class="fl"><img src="https://cp1.douguo.com/upload/caiku/a/d/4/200_ad2c5b6adefb3663f3c347e609a6f7b4.jpg" alt=""></el-link>
              <el-link :underline="false" class="fl"><img src="https://cp1.douguo.com/upload/caiku/a/d/4/200_ad2c5b6adefb3663f3c347e609a6f7b4.jpg" alt=""></el-link>
              <el-link :underline="false" class="fl"><img src="https://cp1.douguo.com/upload/caiku/a/d/4/200_ad2c5b6adefb3663f3c347e609a6f7b4.jpg" alt=""></el-link>
            </div>
          </li>
        </ul>
      </div>
      <!-- 豆果实验室 -->
      <div class="sage experiment">
        <div class="menuTitle">
          <h3>豆果实验室</h3>
        </div>
        <ul>
          <li>
            <el-link :underline="false" class="h-orange"><span>·</span>智能找菜</el-link>
          </li>
          <li>
            <el-link :underline="false" class="h-orange"><span>·</span>豆果测试题</el-link>
          </li>
          <li>
            <el-link :underline="false" class="h-orange"><span>·</span>药品</el-link>
          </li>
        </ul>
      </div>
      <!-- 动漫 -->
      <div class="sage experiment">
        <div class="menuTitle">
          <h3>动漫</h3>
        </div>
        <ul>
          <li>
            <el-link :underline="false" class="h-orange"><span>·</span>午饭的诱惑</el-link>
          </li>
          <li>
            <el-link :underline="false" class="h-orange"><span>·</span>暖暖的晚餐</el-link>
          </li>
          <li>
            <el-link :underline="false" class="h-orange"><span>·</span>汤圆-夜宵</el-link>
          </li>
          <li>
            <el-link :underline="false" class="h-orange"><span>·</span>好吃的面</el-link>
          </li>
          <li>
            <el-link :underline="false" class="h-orange"><span>·</span>绿色的早餐</el-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import menuRendering from '@/components/home/menuRendering'
import Sage from '@/components/home/sage'
export default {
  created(){
        this.$store.dispatch('getworkslist')
        this.$store.dispatch('getdggoods')
      },
  data () {
    return {
      // BannerList: [{
      //   imgUrl: 'https://cp1.douguo.com/upload/caiku/d/0/1/220x220_d0a9f944b8b4cd7a5dcccc39c76f31a1.jpg',
      //   link_url: '#'
      // }, {
      //   imgUrl: 'https://cp1.douguo.com/upload/caiku/c/8/7/220x220_c845971ec7964248c6f2c6a4df7cf8d7.jpg',
      //   link_url: '#'
      // }, {
      //   imgUrl: 'https://cp1.douguo.com/upload/caiku/2/2/3/220x220_22370e2e4779fccc3f13df22523c6e13.jpg',
      //   link_url: '#'
      // }, {
      //   imgUrl: 'https://cp1.douguo.com/upload/caiku/4/b/2/220x220_4b085773cc874cd53955688defc3c4c2.jpeg',
      //   link_url: '#'
      // }],
      btnserch: [{
        lab: '家常菜',
        link_url: '#'  
      }, {
        lab: '凉菜',
        link_url: '#'
      }, {
        lab: '荤菜',
        link_url: '#'
      }, {
        lab: '家常菜',
        link_url: '#'  
      }, {
        lab: '凉菜',
        link_url: '#'
      }, {
        lab: '下饭菜',
        link_url: '#'
      }, {
        lab: '家常菜',
        link_url: '#'  
      }, {
        lab: '凉菜',
        link_url: '#'
      }, {
        lab: '小吃',
        link_url: '#'
      }, {
        lab: '家常菜',
        link_url: '#'  
      }, {
        lab: '凉菜',
        link_url: '#'
      }, {
        lab: '凉菜',
        link_url: '#'
      }, {
        lab: '凉菜',
        link_url: '#'
      }, {
        lab: '凉菜',
        link_url: '#'
      }, {
        lab: '凉菜',
        link_url: '#'
      }],
      imgMenu: [{
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }]
    }
  },
  computed: {
    homegoods () {
      const list = []
      for(var i = 0; i < 3; i++){
        list.push(this.$store.state.goodslist[i])
      }
      return list
    },
    indexwoks(){
      const list = []
      for(var i = 0; i < 4; i++){
        list.push(this.$store.state.worksList[i])
      }
      return list
    }
  },
  methods: {
  }, // 渲染页面商品的数据
  components: {
    menuRendering,
    Sage
  }
}
</script>

<style lang="less" scoped>
  @import '~privatecss/home.less';
  // @import '~css/public_Css.less';
</style>