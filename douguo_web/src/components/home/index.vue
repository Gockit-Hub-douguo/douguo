<template>
  <div class="indexbox">
    <!-- 顶部轮播 -->
    <banner></banner>
    <div class="BayBox">
      <!-- 每日精选菜谱 -->
      <menuRendering></menuRendering>
      <!-- 笔记 -->
      <div class="btitle">
        <!-- 笔记标题 -->
        <div class="menuTitle">
          <h3 class="fl">笔记</h3> <el-link type='primary'  :underline="false" class="fr"><router-link to="/biji">更多 ></router-link></el-link>
        </div>
        <!-- 内容层 -->
        <ul class="menuList muil">
          <li v-for="(item, index) in BannerList" :key="index" :class="{clearMR: index == 3}">
            <div class="menuOne">
              <a><img :src="item.imgUrl" alt=""></a>
              <p class="Mtitle"><a>无敌美味的卫生卤味</a></p>
              <p class="Mauthor"><img class="photouser" src="https://tx1.douguo.com/upload/photo/b/d/2/70_u33844482202757213443.jpeg" alt=""> <a>小豆芽__</a></p>
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
          <el-link :underline='false' v-for="(ite, index) in btnserch" :key="index">{{ite}}</el-link>
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
        <IngredientsList></IngredientsList>
      </div>
      <!-- 豆果达人 -->
      <div class="sage">
        <div class="menuTitle">
          <h3 class="fl">豆果达人</h3> <el-link type='primary'  :underline="false" class="fr">更多 ></el-link>
        </div>
        <ul>
          <Sage v-for="(item, index) in userorderby" :userinfo="item" :key="index"></Sage>
        </ul>
      </div>
      <!-- 精彩主题文章 -->
      <div class="article fl">
        <div class="menuTitle">
          <h3 class="fl">精彩主题文章</h3> <el-link type='primary'  :underline="false" class="fr"><router-link to="/FoodNews">更多 ></router-link></el-link>
        </div>
        <div class="articleZ">
          <router-link :to="{path: '/foodardetail', query:{id: '3132204556708279'}}" class="fl"><img src="https://cp1.douguo.com/upload/post/1/6/9/16fd3c040f34c60d4f2f35a21bd73b89.jpg" alt=""></router-link>
          <h4><el-link :underline="false" class="h-orange">健康专家郑育龙教您如何用橄榄油吃出健康</el-link></h4>
          <p><span>来自：食界大咖秀</span><i>作者：<el-link :underline="false" class="h-orange">少油少盐</el-link></i></p>
        </div>
        <ul class="articleList">
          <li :class="{mlrt: it % 2 != 0}" class="fl" v-for="(it, keys) in activeALL" :key="keys">
            <router-link :to="{path: '/foodardetail', query:{id: it.id}}" class="h-orange"><span class="fl">·</span>{{it.title}}</router-link>
          </li>
        </ul>
      </div>
      <!-- 商城精选 -->
      <div class="shopping_cart fr">
        <div class="menuTitle">
          <h3 class="fl">商城精选</h3> <el-link type='primary'  :underline="false" class="fr"><router-link to="/shop">更多 ></router-link></el-link>
        </div>
        <ul>
            <li v-for="(its, words) in homegoodsf" :key="words">
              <router-link :to="{path: '/goods', query:{id: its.fid}}">
                <el-link :underline="false"  class="fl"><img :src="its.fimgurl" alt=""></el-link>
                <h3><el-link :underline="false" class="h-orange">{{its.fname}}</el-link></h3>
                <p class="price">￥{{its.fnowprice}}</p>
                <p class="xssalesvolume">月售{{its.fsaleCount || 0}}</p>
              </router-link>
            </li>
        </ul>
      </div>
      <!-- 作品推荐 -->
      <div class="works fl">
        <div class="menuTitle">
          <h3>作品推荐</h3>
        </div>
        <ul>
          <li v-for="(item, ik) in menuTitleList" :key="ik">
            <el-link :underline="false" class="fl"><img :src="item.img1" alt=""></el-link>
            <div class="fl h-orange">
              <el-link :underline="false" class="athours h-orange">
                <p>{{item.athour}}</p>
                <p>对照菜谱做出来的作品<em> {{item.numbers}} </em>个</p>
              </el-link>
            </div>
            <div class="fr">
              <el-link :underline="false" class="fl"><img :src="item.img2" alt=""></el-link>
              <el-link :underline="false" class="fl"><img :src="item.img3" alt=""></el-link>
              <el-link :underline="false" class="fl"><img :src="item.img4" alt=""></el-link>
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
import IngredientsList from './Ingredient'
import banner from './banner'
export default {
  created(){
        this.$store.dispatch('getworkslist')
        this.$store.dispatch('getdggoods')
        this.$store.dispatch('loadAxiosActiv', '食界大咖秀主题站')
        this.$store.dispatch('loadAxiosuerby')
      },
  data () {
    return {
      activeALL: [{ title: '' }],
      BannerList: [{
        imgUrl: 'https://cp1.douguo.com/upload/caiku/d/0/1/220x220_d0a9f944b8b4cd7a5dcccc39c76f31a1.jpg',
        link_url: '#'
      }, {
        imgUrl: 'https://cp1.douguo.com/upload/caiku/c/8/7/220x220_c845971ec7964248c6f2c6a4df7cf8d7.jpg',
        link_url: '#'
      }, {
        imgUrl: 'https://cp1.douguo.com/upload/caiku/2/2/3/220x220_22370e2e4779fccc3f13df22523c6e13.jpg',
        link_url: '#'
      }, {
        imgUrl: 'https://cp1.douguo.com/upload/caiku/4/b/2/220x220_4b085773cc874cd53955688defc3c4c2.jpeg',
        link_url: '#'
      }],
      btnserch: ['家常菜', '下饭菜', '快手菜', '凉菜', '主食', '素食', '烘焙', '早餐', '小吃', '红烧肉', '可乐鸡翅', '红烧茄子', '南瓜饼', '酸菜鱼'],
      homegoodsf: [{ fimgurl: '' }],
      menuTitleList: [{
        img1: 'https://cp1.douguo.com/upload/caiku/a/d/4/200_ad2c5b6adefb3663f3c347e609a6f7b4.jpg',
        img2: 'https://cp1.douguo.com/upload/note/9/e/3/200x200_9e956d3f96487a7966c2f01c9c160763.jpeg',
        img3: 'https://cp1.douguo.com/upload/note/b/2/f/200x200_b2970815de5ff7ede9812b9c8edbc8bf.jpg',
        img4: 'https://cp1.douguo.com/upload/note/9/c/d/200x200_9c391a1a2e98459a8bb6bde2cc50d6bd.jpg',
        athour: '涛涛妈咪的作品',
        numbers: 9766
      }, {
        img1: 'https://cp1.douguo.com/upload/caiku/d/7/5/200_d7bb98bbff83c22a3329db17f2d285b5.jpg',
        img2: 'https://cp1.douguo.com/upload/note/2/b/5/200x200_2b13e9e18828433f92e1f0c00cb48cb5.jpeg',
        img3: 'https://cp1.douguo.com/upload/dish/0/8/0/200x200_085618040e000d76a43e89f4a0dfd7b0.jpg',
        img4: 'https://cp1.douguo.com/upload/dish/f/4/6/200x200_f4dc3c3171bf4efd12e69747ef394dd6.jpg',
        athour: '万万的作品',
        numbers: 1174
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/1/f/3/200_1fdf11740492b20d121833a8ae3e7bd3.jpg',
        img2: 'https://cp1.douguo.com/upload/dish/a/1/2/200x200_a116145e002c3bd22822ee0346e61812.jpg',
        img3: 'https://cp1.douguo.com/upload/dish/1/e/c/200x200_1e2070dabf2f7dce41be8aebd24fc6ac.jpg',
        img4: 'https://cp1.douguo.com/upload/dish/c/2/f/200x200_c22c4b73deadeda4225446c7fe22138f.jpg',
        athour: 'dUcky的作品',
        numbers: 1479
      },{
        img1: 'https://cp1.douguo.com/upload/caiku/1/b/0/200_1b82b3aaff9a28ede8bb0dc92c3cc120.jpg',
        img2: 'https://cp1.douguo.com/upload/note/c/4/4/200x200_c4b0ab5d567fdf24c4b67c6bd3cf4974.jpg',
        img3: 'https://cp1.douguo.com/upload/note/d/9/0/200x200_d92f18b0392a4aa540a18cc81b381880.jpeg',
        img4: 'https://cp1.douguo.com/upload/note/3/4/2/200x200_34b7e424cba543f9cbf6de352e619912.jpg',
        athour: '爱烘焙的加菲的作品',
        numbers: 578
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
    },
    activeALLs () {
      // 文章获取
      return this.$store.state.active.activeAll
    },
    userorderby () {
      // 豆果达人排行榜
      return this.$store.state.active.douguodar
    }
  },
  watch: {
    homegoods (newValue) {
      this.homegoodsf = newValue
    },
    activeALLs (newList) {
      this.activeALL = newList
    }
  },
  components: {
    menuRendering,
    Sage,
    IngredientsList,
    banner
  }
}
</script>

<style lang="less" scoped>
  @import '~privatecss/home.less';
  // @import '~css/public_Css.less';
</style>